# Giới thiệu
Server có chức năng build và deploy storefront application cho khách.

# Các dịch vụ AWS liên quan
1. Sơ đồ: https://drive.google.com/file/d/1hPBKnZm4s2pMOI6bHCfiypfpxvr7MA7J/view?usp=sharing
2. Dùng EC2 instance làm máy chủ chạy shop của khách.
3. Dùng CodeBuild để build code cho shop của khách và lưu artifact vào S3.
4. Dùng CodeDeploy để deploy shop của khách lên cụm EC2.
5. Dùng EC2 instance làm proxy server.
6. Sử dụng shared storage EFS để đồng bộ nginx config cho proxy servers.
7. Sử dụng Application Load Balancer (ALB) cho cụm proxy, và Network Load Balancer (NLB) cho cụm EC2 host shop của khách. Một NLB có thể dùng cho một số cụm EC2.
8. IP của ELB là động, vì vậy phải dùng AWS Global Accelerator để lấy IP tĩnh.
9. Dùng AWS Certificate Manager để lưu TLS certificate (để add được vào listener của AWS ELB)

# Cloudflare
1. Phải cấu hình TLS là full (forced) nếu không sẽ bị lỗi "Too many redirects".
2. Không dùng được record \*, vì Cloudflare sẽ không proxy. Như vậy thì không dùng được Cloudflare cho domain mặc định kiểu shop1.ecomsolid.com.

# Lưu ý
1. File zip source code của shop trên S3 phải có tên theo cú pháp `<es-domain>.zip` (ví dụ: `example.es-hs.com.zip`)
2. File zip source code của shop phải có folder `scripts` chứa các script để phục vụ việc deploy.
3. Cần cấu hình region trong bảng `region_configs` để hệ thống biết có thể deploy vào region nào, các thông tin để deploy của region là gì.
4. Một shop chạy trên ít nhất 2 EC2 instance, các instance này phải có chung tag `Name`. Các cụm EC2 khác nhau phải có tag `Name` khác nhau. Thông tin của các cụm EC2 này phải được lưu vào bảng `ec2_instance_groups` để hệ thống biết để deploy.
5. Mỗi shop chạy trên cùng một cụm EC2 sẽ chạy trên các port khác nhau.
6. Các EC2 instance làm proxy server phải có cùng tag `Name`
7. Cụm máy chủ proxy đảm nhiệm việc phân luồng request vào các shop vào đúng cụm máy EC2 và port tương ứng với mỗi shop theo domain.
8. Các máy chủ proxy đặt trong public subnet (nên chuyển sang private subnet)
9.  Các máy chủ EC2 chạy shop của khách được đặt trong các private subnet để tăng tính bảo mật.
10. Dùng AWS System Manager để chạy lệnh update hệ thống thường xuyên cho các máy EC2.
11. Balancer của cụm proxy phải là ALB, vì NLB có vẻ sẽ sleep khi không có client connect. (Đã test bằng cách tạo NLB cho 1 target group. Sau 1 thời gian mới truy cập endpoint thì chờ rất lâu mới load được page)
12. Muốn forward HTTPS request qua ALB thì cần add TLS certificate vào listener của ALB, vì vậy sau khi được nhận được certificate từ LetsEncrypt thì phải import vào AWS Certificate Manager và add vào HTTPS listener của ALB.
13. Balancer của cụm proxy sẽ redirect request vào port 80 về port 443 (để force SSL), nhưng request để verify domain của LetsEncrypt sẽ được forward về server TLS certificate service trên port 80.

# Các hàm GRPC
## DeployShop
Có chức năng build và deploy shop. Hàm sẽ trả về ngay khi các bước validate thực hiện xong, và quá trình deploy sẽ được chạy ngầm. Mỗi shop chỉ được chạy một process deploy tại một thời điểm.

Quá trình deploy được thực hiện theo các bước:
1. Tạo shop trong DB
2. Build code và upload lên S3
3. Dùng CodeDeploy deploy vào một cụm EC2
4. Dùng SSM chạy lệnh tạo file nginx config cho cụm proxy
5. Tạo EC2 target group với port của shop (target là cụm EC2 được deploy)
6. Tạo NLB listener với port và target group mới tạo của shop
7. Nếu shop có custom domain, insert thông tin vào bảng `shop_certificates` để job định kỳ request certificate cho shop

Params:
- ShopDomain `string required`: domain ES của shop (ví dụ: `example.es-hs.com`)
- Region `string required`: AWS region muốn deploy (`us-north-1`,...)
- SourceBucket `string required`: tên S3 bucket chưa source của shop
- SourceVersion `string`: S3 object version của file source muốn deploy. Nếu không truyền thì hệ thống sẽ tự lấy version mới nhất để build và deploy. Nếu truyền thì hệ thống sẽ tìm version của artifact đã build tương ứng và deploy artifact đó thay vì phải build từ đầu.
- CustomDomain `string`: domain của shop khi user connect domain riêng cho shop

## RestartShop
Dùng AWS SSM chạy command restart process của shop trên cụm EC2

Params:
- ShopDomain `string required`: domain ES của shop (ví dụ: `example.es-hs.com`)
- Region `string required`: AWS region (`us-north-1`,...)

# TLS Certificate Service
Là service thực hiện tạo TLS certificate cho custom domains của khách.
### Lưu ý
- Service này phải được deploy trên một EC2 instance vì chúng ta dùng `certbot` để tạo certificate. Hơn nữa còn có thể mount chung file system storage với cụm proxy server để dùng chung nginx configs.
- Khi deploy lần đầu cần ssh vào server để cấu hình file `env.yml`
- File `create_service.py` trong thư mục `scripts` trên repo có chứa thông tin deploy
