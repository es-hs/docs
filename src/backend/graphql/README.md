# Setup GraphQL cho Go Project

## Thư viện

Hiện tại có 2 libs liên quan đến GraphQL dành cho GoLang đấy là
1.  [graphql-go](https://github.com/graphql-go/graphql)
2.  [gqlgen](https://github.com/99designs/gqlgen)

Đánh giá cá nhân thì lib (2) sẽ tiện về việc code hơn do chỉ cần định nghĩa file .graphql và gõ lệnh để tự động generate ra resolver, model,...

Tuy nhiên do kiến trúc project của es-hs đang chia theo module lên việc generate của lib (2) đang không phù hợp nên chúng ta sẽ chọn lib (1)


### [Implement gqlgen](./gqlgen.md)

### [Implement graphql-go](./graphql-go.md)
