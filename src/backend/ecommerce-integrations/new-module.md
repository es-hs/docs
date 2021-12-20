# New Module

1. Clone from `todo` module, ví dụ module tên là `MyModule`
2. Chuột phải vào folder vừa clone -> Find in folder, replace hết `Todo` -> `MyModule`, `todo` -> `myModule`
3. Fix 1 số lỗi như: thiếu model, sửa lại tên file từ `todo` thành `mymodule`,...

## Coding

Ở trong `delivery/http` sẽ có 2 files
- mymodule.go: có tác dụng giống như controller
- router.go: khai báo các routers có trong module `mymodule`
![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/ab432a96-1be7-4046-813b-a3d7fc1986d5.png)

Để project nhận được router của module vừa khai báo thì ta vào file `main.go` tương ứng của shopify/woocommerce trong thư mục `cmd/:platform/main.go` như sau:
![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/eb790ac6-aa5e-4c6b-aa36-4bf4bb06b2c7.png)