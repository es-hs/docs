## Setup

### How it work ?

Hướng dẫn sử dụng thư viện phân quyền user access vào store trong hệ thống ES-HS

- Concept: Trong phạm vi mỗi store sẽ có 1 hệ thống các roles cố định, mỗi role sẽ có quyền thực hiện 1 action nào đó đối với store ( cố định ) (vd: đọc thông tin shop, sửa thông tin shop, đọc product của shop, sửa product của shop )

- Các role sẽ có thể inherit lẫn nhau, cao nhất là owner, owner sẽ inherit các permission của admin, admin sẽ inherit tất cả các role liên quan sửa xóa đọc ( product, section, page ...)

VD trọng phạm vi store X có user owner là Y, ác manager Z và O
```
store id : X

├── owner ( user Y )
├── admin ( user Z, user O ....)
│   ├── shop_read
│   ├── shop_write
|   ├── product_read
|   ├── product_write
|   ├── product_delete
|   ├── section_read
|   ├── section_write
|   ├── section_delete
```
- Khi access vào api, tùy vào resource và action khi vào api đó sẽ thực hiện mà sẽ check quyền của user đối với store đó và quyền đó
vd trong repo `app-api` ( user lấy trong token, store lấy trong header es-shop-id và action thì tùy vào usecase resolver đó access vào ( tham khảo repo app-api để biết thêm thông tin chi tiết ))
- Khi tạo mới 1 store, tùy vào store tạo user đó thì sẽ add role owner cho user cũng như list các quyền ( admin, shop_read, product_read...) trong phạm vi store đó
- Khi 1 user add thêm 1 manager là user khác cho shop đó, shop là manager sẽ có quyền admin
- và tùy vào usecase mà sẽ có thể thêm sửa xóa các role trong phạm vi store X...

- Khi lấy role của user owner ( user Y ) trong phạm vi store  X thì sẽ chỉ ra `owner` , nhưng khi check cả role inherit thì sẽ ra `owner,admin,shop_read,shop_write,product_read...`

- Khi lấy role của user owner ( user Z, user O ) trong phạm vi store X thì sẽ chỉ ra `admin` , nhưng khi check cả role inherit thì sẽ ra `admin,shop_read,shop_write,product_read...`

- Để làm được điều này chúng ta sẽ có 3 thư viện
  - `github.com/es-hs/es-hs-authz-service` : là **server authz**, connect đến database redis để lưu trữ thông tin và là nơi check, thêm sửa xóa quyền
  - `github.com/es-hs/authzclient` : là **client authz**, giúp cho việc khởi tạo kết nối đến **server authz** dễ dàng hơn , trong các repo sau này nếu cần authen sẽ implement repo này vào , hiện đã có code mẫu sử dụng thư viện này bên `app-api` https://github.com/es-hs/app-api
  - `https://github.com/es-hs/erpc` : là repo chứa các method dành cho **client authz** và **server authz **
- Cách thức sử dụng mọi người có thể xem ở bên dưới, và nên xem từ service ( khởi tạo server local ) -> client (call lên server )
### Service Repo

`https://github.com/es-hs/es-hs-authz-service`

### Client Repo

`https://github.com/es-hs/authzclient`

### ERPC Repo

- Repo chứa file proto và file go đã gen để quy định client / service  có thể call / serve những method gRPC nào,

- Khi update các method của thư viện authz thì cần update file proto trong thư mục authz của repo `github.com/es-hs/erpc` trước, gen lại file , cập nhật lại version service authz và version của service authz ( xem **RUN AND CONFIG** bên dưới )

`https://github.com/es-hs/erpc`

## UPDATING...

### [RUN AND CONFIG SERVICE](./service.md)

### [RUN AND CONFIG CLIENT](./client.md)

### [UPDATE SERVICE AND CLIENT](./update.md)
