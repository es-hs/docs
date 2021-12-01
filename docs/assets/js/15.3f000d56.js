(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{410:function(a,s,e){"use strict";e.r(s);var o=e(54),n=Object(o.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"register-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-user"}},[a._v("#")]),a._v(" Register User")]),a._v(" "),e("p",[a._v("Endpoint: "),e("code",[a._v("localhost:3000/auth/register")]),a._v("\nData")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "user_name":"dragon_born_2",\n    "email":"longthanh_2@gempages.help",\n    "password":"dragobron"\n}\n')])])]),e("h3",{attrs:{id:"register-shop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-shop"}},[a._v("#")]),a._v(" Register Shop")]),a._v(" "),e("ul",[e("li",[a._v("Sau khi đăng ký sẽ có tự 1 shop tên và domain mặc định giống với tên user_name. user register sẽ là user owner của shop đó")]),a._v(" "),e("li",[a._v("Nếu muốn thêm 1 shop mới, call mutation "),e("code",[a._v("newShop")]),a._v(" trong graphql")]),a._v(" "),e("li",[a._v("Chi shop được tạo bởi user mới có quyền owner ( để xóa shop )")])]),a._v(" "),e("h3",{attrs:{id:"login-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-user"}},[a._v("#")]),a._v(" Login User")]),a._v(" "),e("p",[a._v("Endpoint: "),e("code",[a._v("localhost:3000/auth/login")]),a._v("\nData")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "email":"longthanh_2@gempages.help",\n    "password":"dragobron"\n}\n')])])]),e("h3",{attrs:{id:"login-shop-yeu-cau-shop-la-admin-hoac-owner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-shop-yeu-cau-shop-la-admin-hoac-owner"}},[a._v("#")]),a._v(" Login Shop ( yêu cầu shop là admin hoăc owner )")]),a._v(" "),e("ul",[e("li",[a._v("Sau khi login user, login shop bằng cách call method POST : "),e("code",[a._v("localhost:3000/auth/shop/login/:shop-domain")]),a._v(" , vd user trên sẽ call "),e("code",[a._v("localhost:3000/auth/shop/login/dragon_born_2")])])]),a._v(" "),e("h3",{attrs:{id:"add-shop-manager-admin-cho-shop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-shop-manager-admin-cho-shop"}},[a._v("#")]),a._v(" Add shop manager (admin cho shop)")]),a._v(" "),e("ul",[e("li",[a._v("call mutation "),e("code",[a._v("shopAddManager")]),a._v(" trong graphql ( đã login đúng user có quyền) => sẽ cấp quyền admin cho user có email như vậy")])])])}),[],!1,null,null,null);s.default=n.exports}}]);