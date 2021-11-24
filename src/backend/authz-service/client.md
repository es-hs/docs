### Description

Là client để gọi sang service authz [authz service](./service.md)

## Project structure

![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/8509143c-6441-4877-a17a-5b726f06cf49.png)

`authz_client_example/main.go`: Code example khởi tạo client và call 1 số method tới server authz được chỉ định , cần sửa lại `address     = "3.0.95.112:50051"` thành địa chỉ của mình, nếu chạy service authz ở local, `address = "localhost:50051"` ( tùy dưới local có nhiều service grpc hay ko )

## Use

### Khởi tạo

```
import	authzclient "github.com/es-hs/authzclient"

address := "localhost:50051"

err := authzclient.InitAuthClient(address, grpc.WithInsecure(), grpc.WithBlock())
// close connection khi đóng server
defer authzclient.Conn.Close()

// add role authzclient.OWNER_ROLE cho user có ID=2009 vào shop có ID=2011
r, err := authzclient.AddRoleToDomain(2009, 2011, authzclient.OWNER_ROLE)
logrus.Println(time.Since(t1))
if err != nil {
  log.Fatalf("err when call authz service %v", err)
}
logrus.Println("Result ", r)

```

### Update Roles và Permission

Sau khi update roles và permission trên `authz service` update file `constant.go` giống với file `constant.go` của version client đang sử dụng

### Khởi tạo owner role cho user trong 1 shop, khởi tạo việc owner inherit role admin, admin inherit tất cả các roles còn lại
```
// khởi tạo owner role cho user có ID = 2009 trong shop có ID = 2011, khởi tạo việc owner inherit role admin, admin inherit tất cả các quyền còn lại

r5, err := authzclient.GenerateOwnerRole(2009, 2011)
if err != nil {
  log.Fatalf("could not greet: %v", err)
}

```
```
// add danh sách các role cho user ID = 2009 trong shop có ID = 2011,

r6, err := authzclient.AddRolesForUserToDomain(2009, 2011, []string{authzclient.ADMIN_ROLE, authzclient.PRODUCT_READ})
if err != nil {
  log.Fatalf("could not greet: %v", err)
}
```
```
//show danh sách các roles của user có ID = 2009 trong shop có ID = 2011, chỉ các role trực tiếp, ko có role inherit

roles, err = authzclient.GetRolesInDomain(2009, 2011)
if err != nil {
  log.Fatalf("could not greet: %v", err)
}
```
```
//show danh sách các roles và các inherited roles của user có ID = 2009 trong shop có ID = 2011, bao gồm các role trực tiếp, và có roles inherit

roles, err = authzclient.GetRolesInDomain(2009, 2011)
if err != nil {
  log.Fatalf("could not greet: %v", err)
}

```
```
// Remove 1 role của user có ID = 2009 trong shop có ID = 2011, chỉ các role trực tiếp, ko có role inherit

r7, err := authzclient.RemoveRoleFromDomain(2009, 2011, authzclient.OWNER_ROLE)
if err != nil {
  log.Fatalf("could not greet: %v", err)
}
```
```
//Remove 1 danh sách roles của user có ID = 2009 trong shop có ID = 2011, chỉ các role trực tiếp, ko tính role inherit

r8, err := authzclient.RemoveRolesFromDomain(2009, 2011, []string{authzclient.ADMIN_ROLE, authzclient.PRODUCT_READ})
if err != nil {
  log.Fatalf("could not greet: %v", err)
}
```



