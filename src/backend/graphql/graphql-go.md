# Setup

Đầu tiên thì chúng ta cần có kiến thức về GraphQL nói chung, xem thêm [tại đây](https://graphql.org/)

Docs setup này sẽ lấy ví dụ của module `theme_template` của repo [app-api](https://github.com/es-hs/app-api)

## Định nghĩa schema của 1 module

Ở mỗi 1 module, trong `modules/theme_template/delivery/graphql` sẽ gồm 3 files:

- **theme_template.graphql:** File tác dụng định nghĩa cấu trúc schema của module hiện tại theo cú pháp chuẩn của GraphQL

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/02494bbe-a380-460e-9123-e579de7d51b0.png)

  Ở file này chúng ta sẽ định nghĩa các model, query và mutation của module này, định nghĩa ở file này chỉ có tác dụng giúp chúng ta nhìn trực quan module này gồm những gì, từ đấy định nghĩa tương ứng vào code ở 2 files còn lại

- **theme_template_schema.go:** File định nghĩa schema ớ phía code của Go dựa vào file `theme_template.graphql` bên trên.

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/500122f8-db27-4674-b39c-a99b0fbe791b.png)

  Từ file `theme_template.graphql` bên trên chúng ta định nghĩa ra được:

  **Queries:**

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/e752e5f3-a369-48e6-926c-f98bed9938d8.png)

  **Mutations:**

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/7eb648e6-8cee-4a2f-94ec-2ea3f18c7465.png)

  **Model:**

  Sử dụng `graphql.NewObject`

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/15c9e831-b580-4933-ba1e-ebc81c0cd55b.png)

  **Pagination and Edges:**

  Sử dụng hàm [graph.NewEdgesGraphQL](https://github.com/es-hs/app-api/graph/types.go)

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/fdd8940b-d648-4fe5-ab5b-fb4f7c2df5a1.png)

  **Input của mutations:**

  Sử dụng `graphql.NewInputObject`

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/f3047ddc-1189-4ddf-b53d-a406a0597fac.png)

- **theme_template_resolver.go:** File định nghĩa code xử lý của queries và mutations đã định nghĩa bên trên

  Định nghĩa interface gồm các function tương ứng với các queries và mutations đã định nghĩa bên trên

  ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/d912c76d-e593-46a1-92b7-664154218481.png)

  Resolver ở đây sẽ tương ứng với controller trong mô hình MVC, đối với cấu trúc của các project của `es-hs` hiện tại thì resolver ở nằm ở phần delivery trong mô hình sau:

  ![image](https://github.com/bxcodec/go-clean-arch/raw/master/clean-arch.png)

## Register GraphQL của module

Sau đi đã định nghĩa xong cả 3 files thì ở file `server.go` gọi function init graphql của module này như sau:

![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/12482659-d51c-4d09-9ca1-25711af15ca9.png)

**Line 81:** Init instance của module `theme_template`
**Line 82:** Register queries của module `theme_template`
**Line 83:** Register mutations của module `theme_template`
**Line 85-105:** Khởi tạo GraphQL Schema của toàn bộ project

### Resgiter nhiều modules

Để init schema của nhiều module thì chỉ cần gọi như sau:

![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/dd2146da-8f98-4486-9fd0-feffeffd3604.png)

## Using

- Set argument của query/mutation is required: `graphql.NewNonNull()`

    ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/c918b7af-c7db-48b6-aebe-c42e3f88f90c.png)

- Set select params của query/mutation is required: `graphql.NewNonNull()`

    ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/41d60ce8-b7f7-40a9-989e-4c211e5ad3fb.png)

- Declare enum value: `graphql.NewEnum()`

    ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/486e50d6-1733-4cc6-9985-f41b9a5e01b7.png)

    Then register it in `server.go` in `Types` field

    ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/0c15d0d8-0ba7-4d88-9337-e129737d5eec.png)

- Query/mutation array of object: `graphql.NewList()`

    ![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/b0858cdb-122f-4aac-878f-47be7e9a0c65.png)
