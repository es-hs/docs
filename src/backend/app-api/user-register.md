## Register User
Endpoint: `localhost:3000/auth/register`
Data
```
{
    "user_name":"dragon_born_2",
    "email":"longthanh_2@gempages.help",
    "password":"dragobron"
}
```

### Register Shop
- Sau khi đăng ký sẽ có tự 1 shop tên và domain mặc định giống với tên user_name. user register sẽ là user owner của shop đó
- Nếu muốn thêm 1 shop mới, call mutation `newShop` trong graphql
- Chi shop được tạo bởi user mới có quyền owner ( để xóa shop )
### Login User
Endpoint: `localhost:3000/auth/login`
Data
```
{
    "email":"longthanh_2@gempages.help",
    "password":"dragobron"
}
```
### Login Shop ( yêu cầu shop là admin hoăc owner )
- Sau khi login user, login shop bằng cách call method POST : `localhost:3000/auth/shop/login/:shop-domain` , vd user trên sẽ call `localhost:3000/auth/shop/login/dragon_born_2`
### Add shop manager (admin cho shop)
- call mutation `shopAddManager` trong graphql ( đã login đúng user có quyền) => sẽ cấp quyền admin cho user có email như vậy
