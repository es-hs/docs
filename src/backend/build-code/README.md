# Giới thiệu
Server có chức năng build và deploy storefront cho khách.

# Các dịch vụ AWS liên quan
1. Sơ đồ: https://drive.google.com/file/d/1hPBKnZm4s2pMOI6bHCfiypfpxvr7MA7J/view?usp=sharing
2. Sử dụng shared storage EFS để đồng bộ nginx config và TLS certificate cho proxy servers.
3. Các máy chủ proxy đặt trong public subnet (nên chuyển sang private subnet)
4. Các máy chủ EC2 host store của khách được đặt trong các private subnet để tăng tính bảo mật.
5. IP của load balancer là động, vì vậy phải dùng AWS Global accelerator để lấy IP tĩnh.
6. Internet facing balancer phải là Application load balancer, vì Network load balancer có vẻ sẽ sleep khi không có client connect. (Đã test bằng cách tạo NLB cho 1 target group. Sau 1 thời gian mới truy cập endpoint thì chờ rất lâu mới load được page)
7. Application load balancer muốn forward HTTPS request thì lại cần add certificate vào listener
