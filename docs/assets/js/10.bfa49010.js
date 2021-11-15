(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(c,e,t){"use strict";t.r(e);var o=t(0),i=Object(o.a)({},(function(){var c=this.$createElement;this._self._c;return this._m(0)}),[function(){var c=this,e=c.$createElement,t=c._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"gioi-thieu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gioi-thieu"}},[c._v("#")]),c._v(" Giới thiệu")]),c._v(" "),t("p",[c._v("Server có chức năng build và deploy storefront application cho khách.")]),c._v(" "),t("h1",{attrs:{id:"cac-dich-vu-aws-lien-quan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cac-dich-vu-aws-lien-quan"}},[c._v("#")]),c._v(" Các dịch vụ AWS liên quan")]),c._v(" "),t("ol",[t("li",[c._v("Sơ đồ: https://drive.google.com/file/d/1hPBKnZm4s2pMOI6bHCfiypfpxvr7MA7J/view?usp=sharing")]),c._v(" "),t("li",[c._v("Dùng EC2 instance làm máy chủ chạy shop của khách.")]),c._v(" "),t("li",[c._v("Dùng CodeBuild để build code cho shop của khách và lưu artifact vào S3.")]),c._v(" "),t("li",[c._v("Dùng CodeDeploy để deploy shop của khách lên cụm EC2.")]),c._v(" "),t("li",[c._v("Dùng EC2 instance làm proxy server.")]),c._v(" "),t("li",[c._v("Sử dụng shared storage EFS để đồng bộ nginx config cho proxy servers.")]),c._v(" "),t("li",[c._v("Sử dụng Application Load Balancer (ALB) cho cụm proxy, và Network Load Balancer (NLB) cho cụm EC2 host shop của khách. Một NLB có thể dùng cho một số cụm EC2.")]),c._v(" "),t("li",[c._v("IP của ELB là động, vì vậy phải dùng AWS Global Accelerator để lấy IP tĩnh.")]),c._v(" "),t("li",[c._v("Dùng AWS Certificate Manager để lưu TLS certificate (để add được vào listener của AWS ELB)")])]),c._v(" "),t("h1",{attrs:{id:"cloudflare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare"}},[c._v("#")]),c._v(" Cloudflare")]),c._v(" "),t("ol",[t("li",[c._v('Phải cấu hình TLS là full (forced) nếu không sẽ bị lỗi "Too many redirects".')]),c._v(" "),t("li",[c._v("Không dùng được record *, vì Cloudflare sẽ không proxy. Như vậy thì không dùng được Cloudflare cho domain mặc định kiểu shop1.ecomsolid.com.")])]),c._v(" "),t("h1",{attrs:{id:"luu-y"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#luu-y"}},[c._v("#")]),c._v(" Lưu ý")]),c._v(" "),t("ol",[t("li",[c._v("File zip source code của shop trên S3 phải có tên theo cú pháp "),t("code",[c._v("<es-domain>.zip")]),c._v(" (ví dụ: "),t("code",[c._v("example.es-hs.com.zip")]),c._v(")")]),c._v(" "),t("li",[c._v("File zip source code của shop phải có folder "),t("code",[c._v("scripts")]),c._v(" chứa các script để phục vụ việc deploy.")]),c._v(" "),t("li",[c._v("Cần cấu hình region trong bảng "),t("code",[c._v("region_configs")]),c._v(" để hệ thống biết có thể deploy vào region nào, các thông tin để deploy của region là gì.")]),c._v(" "),t("li",[c._v("Một shop chạy trên ít nhất 2 EC2 instance, các instance này phải có chung tag "),t("code",[c._v("Name")]),c._v(". Các cụm EC2 khác nhau phải có tag "),t("code",[c._v("Name")]),c._v(" khác nhau. Thông tin của các cụm EC2 này phải được lưu vào bảng "),t("code",[c._v("ec2_instance_groups")]),c._v(" để hệ thống biết để deploy.")]),c._v(" "),t("li",[c._v("Mỗi shop chạy trên cùng một cụm EC2 sẽ chạy trên các port khác nhau.")]),c._v(" "),t("li",[c._v("Các EC2 instance làm proxy server phải có cùng tag "),t("code",[c._v("Name")])]),c._v(" "),t("li",[c._v("Cụm máy chủ proxy đảm nhiệm việc phân luồng request vào các shop vào đúng cụm máy EC2 và port tương ứng với mỗi shop theo domain.")]),c._v(" "),t("li",[c._v("Các máy chủ proxy đặt trong public subnet (nên chuyển sang private subnet)")]),c._v(" "),t("li",[c._v("Các máy chủ EC2 chạy shop của khách được đặt trong các private subnet để tăng tính bảo mật.")]),c._v(" "),t("li",[c._v("Dùng AWS System Manager để chạy lệnh update hệ thống thường xuyên cho các máy EC2.")]),c._v(" "),t("li",[c._v("Balancer của cụm proxy phải là ALB, vì NLB có vẻ sẽ sleep khi không có client connect. (Đã test bằng cách tạo NLB cho 1 target group. Sau 1 thời gian mới truy cập endpoint thì chờ rất lâu mới load được page)")]),c._v(" "),t("li",[c._v("Muốn forward HTTPS request qua ALB thì cần add TLS certificate vào listener của ALB, vì vậy sau khi được nhận được certificate từ LetsEncrypt thì phải import vào AWS Certificate Manager và add vào HTTPS listener của ALB.")]),c._v(" "),t("li",[c._v("Balancer của cụm proxy sẽ redirect request vào port 80 về port 443 (để force SSL), nhưng request để verify domain của LetsEncrypt sẽ được forward về server TLS certificate service trên port 80.")])]),c._v(" "),t("h1",{attrs:{id:"cac-ham-grpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cac-ham-grpc"}},[c._v("#")]),c._v(" Các hàm GRPC")]),c._v(" "),t("h2",{attrs:{id:"deployshop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployshop"}},[c._v("#")]),c._v(" DeployShop")]),c._v(" "),t("p",[c._v("Có chức năng build và deploy shop. Hàm sẽ trả về ngay khi các bước validate thực hiện xong, và quá trình deploy sẽ được chạy ngầm. Mỗi shop chỉ được chạy một process deploy tại một thời điểm.")]),c._v(" "),t("p",[c._v("Quá trình deploy được thực hiện theo các bước:")]),c._v(" "),t("ol",[t("li",[c._v("Tạo shop trong DB")]),c._v(" "),t("li",[c._v("Build code và upload lên S3")]),c._v(" "),t("li",[c._v("Dùng CodeDeploy deploy vào một cụm EC2")]),c._v(" "),t("li",[c._v("Dùng SSM chạy lệnh tạo file nginx config cho cụm proxy")]),c._v(" "),t("li",[c._v("Tạo EC2 target group với port của shop (target là cụm EC2 được deploy)")]),c._v(" "),t("li",[c._v("Tạo NLB listener với port và target group mới tạo của shop")]),c._v(" "),t("li",[c._v("Nếu shop có custom domain, insert thông tin vào bảng "),t("code",[c._v("shop_certificates")]),c._v(" để job định kỳ request certificate cho shop")])]),c._v(" "),t("p",[c._v("Params:")]),c._v(" "),t("ul",[t("li",[c._v("ShopDomain "),t("code",[c._v("string required")]),c._v(": domain ES của shop (ví dụ: "),t("code",[c._v("example.es-hs.com")]),c._v(")")]),c._v(" "),t("li",[c._v("Region "),t("code",[c._v("string required")]),c._v(": AWS region muốn deploy ("),t("code",[c._v("us-north-1")]),c._v(",...)")]),c._v(" "),t("li",[c._v("SourceBucket "),t("code",[c._v("string required")]),c._v(": tên S3 bucket chưa source của shop")]),c._v(" "),t("li",[c._v("SourceVersion "),t("code",[c._v("string")]),c._v(": S3 object version của file source muốn deploy. Nếu không truyền thì hệ thống sẽ tự lấy version mới nhất để build và deploy. Nếu truyền thì hệ thống sẽ tìm version của artifact đã build tương ứng và deploy artifact đó thay vì phải build từ đầu.")]),c._v(" "),t("li",[c._v("CustomDomain "),t("code",[c._v("string")]),c._v(": domain của shop khi user connect domain riêng cho shop")])]),c._v(" "),t("h2",{attrs:{id:"restartshop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restartshop"}},[c._v("#")]),c._v(" RestartShop")]),c._v(" "),t("p",[c._v("Dùng AWS SSM chạy command restart process của shop trên cụm EC2")]),c._v(" "),t("p",[c._v("Params:")]),c._v(" "),t("ul",[t("li",[c._v("ShopDomain "),t("code",[c._v("string required")]),c._v(": domain ES của shop (ví dụ: "),t("code",[c._v("example.es-hs.com")]),c._v(")")]),c._v(" "),t("li",[c._v("Region "),t("code",[c._v("string required")]),c._v(": AWS region ("),t("code",[c._v("us-north-1")]),c._v(",...)")])]),c._v(" "),t("h1",{attrs:{id:"tls-certificate-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tls-certificate-service"}},[c._v("#")]),c._v(" TLS Certificate Service")]),c._v(" "),t("p",[c._v("Là service thực hiện tạo TLS certificate cho custom domains của khách.")]),c._v(" "),t("h3",{attrs:{id:"luu-y-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#luu-y-2"}},[c._v("#")]),c._v(" Lưu ý")]),c._v(" "),t("ul",[t("li",[c._v("Service này phải được deploy trên một EC2 instance vì chúng ta dùng "),t("code",[c._v("certbot")]),c._v(" để tạo certificate. Hơn nữa còn có thể mount chung file system storage với cụm proxy server để dùng chung nginx configs.")]),c._v(" "),t("li",[c._v("Khi deploy lần đầu cần ssh vào server để cấu hình file "),t("code",[c._v("env.yml")])]),c._v(" "),t("li",[c._v("File "),t("code",[c._v("create_service.py")]),c._v(" trong thư mục "),t("code",[c._v("scripts")]),c._v(" trên repo có chứa thông tin deploy")])])])}],!1,null,null,null);e.default=i.exports}}]);