### Environment variables

```
GRPC_PORT: cổng phát gRPC, mặc định là 50051
REDIS_URL= url đến backend redis
```

## Project structure

![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/05106130-6c06-4d4d-9d11-c6aab95dbdd6.png)

```
configs : thư mục chứa package config

./configs/policy/rbac_with_domain_no_obj : file cấu hình casbin

modules: thư mục chứa module

package: các package thêm , hiện tại sẽ có casbinhelper để wrap 1 số hàm của casbin cho dễ sử  dụng và define các roles / permission ( do roles / permission trong mỗi store đều giống hệt nhau nên mình ko cần casbin làm hộ phần này )

scripts: chứa script watch / build image ( updating ... )

.env.example: chứa env example
```

## List rule và permission khi sử dụng

- Mặc định danh sách các roles và permission sẽ được lưu ở `package/casbinhelper/constant.go`, Khi cập nhật để thêm roles / permission sẽ cần cập nhật ở cả client và trên package service

- VD : Với 1 shop có id là X cần định nghĩa 4 role owner, admin, shop_read, shop_write , trong đó thì
  - owner và admin có quyền login
  - shop_read có quyền shop_read
  - shop_write có quyền shop_write
  - việc định nghĩa owner inherit role của admin
  - và admin inherit 2 roles shop_read, shop_write sẽ định nghĩa khi `casbin client` gọi sang `casbin service` , ở service mình chỉ định nghĩa các roles và quyền của các roles

- Trong file `package/casbinhelper/constant.go` quy định các `roles` và `permission` như sau

```
package casbinhelper

const (
	OWNER_ROLE     = "owner"
	ADMIN_ROLE     = "admin"
	SHOP_READ      = "shop_read"
	SHOP_WRITE     = "shop_write"
)

const (
	LOGIN_PERMISSION          = "login"
	SHOP_READ_PERMISSION      = "shop_read"
	SHOP_WRITE_PERMISSION     = "shop_write"
)

```
Trong file `package/casbinhelper/init.go` cần khởi tạo các role tương ứng với `permission` nào

```
func init() {
	mapRolePermission = make(map[string]map[string]bool)
	mapScope = make(map[string]bool)
	mapRolePermission[OWNER_ROLE] = map[string]bool{
		LOGIN_PERMISSION: true,
	}
	mapRolePermission[ADMIN_ROLE] = map[string]bool{
		LOGIN_PERMISSION: true,
	}
	mapRolePermission[SHOP_READ] = map[string]bool{
		SHOP_READ_PERMISSION: true,
	}
	mapRolePermission[SHOP_WRITE] = map[string]bool{
		SHOP_WRITE_PERMISSION: true,
	}
}

```

Khi cần định nghĩa thêm role và permission, tạo constant thêm bên file `package/casbinhelper/constant.go` và bổ sung bên file `init.go` . Sau đó cập nhật các constant bên `https://github.com/es-hs/authzclient`

### Run locally

`make watch` -  Yêu cầu đã chạy redis ở local và sử dụng .env như file example
