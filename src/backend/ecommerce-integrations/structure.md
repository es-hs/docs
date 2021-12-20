# Structure
Referring from these repositories

- https://github.com/bxcodec/go-clean-arch
- https://github.com/golang-standards/project-layout


## Ý nghĩa từng folders
- api: Nơi chứa api docs của dự án, ví dụ như swagger
- cmd: Chứa các hàm main của dự án, ví dụ như hàm main chạy project shopify, hàm main chạy project woocommerce, hàm main chạy seeding,...
- configs: Chứa các configs chung của toàn hệ thống như file `.air.toml`
- deployments: Chứa các file deployment của hệ thống như docker, aws, jenkins,...
- docs (deprecated): Chứa go-docs của dự án
- driver: Chứa các file kết nối đến database như mysql, postgres, redis,..
- internal: Source code chính của project sẽ được để tại đây, code được chia các tính năng thành từng module như module product, auth, shop,..
    - delivery: Có tác dụng tương dự như controller, nhưng sẽ chứa các phương thức kết nối đến hệ thống như http, graphql, rpc,.. và định nghĩa router của module tại đây
    - usecase: Business logic của hệ thống sẽ tập trung chính tại đây
    - repository: Database logic của hệ thống sẽ tập trung chính tại đây
        > Tham khảo thêm tại: https://github.com/bxcodec/go-clean-arch
- pkg: Chứa các package global của toàn hệ thống như seeder, utils, helpers,...
- scripts: Chứa các file scripts của hệ thống nằm chạy các task nhanh hơn

## Ý nghĩa các file config
- .editorconfig: File config của VSCode, config 1 số convention chung dành cho team khi code
- .env.example: File environment mẫu, clone file này khi tạo mới file `.env`, khi cập nhật biến mới cũng cần thiết cập nhật cả file này cho và thông báo cho team
- Makefile: file giúp chạy project 1 cách nhanh hơn, bao gồm 1 số lệnh như: chạy server, build server, seeding data,...