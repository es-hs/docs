(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{189:function(n,e,a){"use strict";a.r(e);var t=a(0),s=Object(t.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[n._v("#")]),n._v(" Environment variables")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("GRPC_PORT: cổng phát gRPC, mặc định là 50051\nREDIS_URL= url đến backend redis\n")])])]),a("h2",{attrs:{id:"project-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[n._v("#")]),n._v(" Project structure")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/05106130-6c06-4d4d-9d11-c6aab95dbdd6.png",alt:"image"}})]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("configs : thư mục chứa package config\n\n./configs/policy/rbac_with_domain_no_obj : file cấu hình casbin\n\nmodules: thư mục chứa module\n\npackage: các package thêm , hiện tại sẽ có casbinhelper để wrap 1 số hàm của casbin cho dễ sử  dụng và define các roles / permission ( do roles / permission trong mỗi store đều giống hệt nhau nên mình ko cần casbin làm hộ phần này )\n\nscripts: chứa script watch / build image ( updating ... )\n\n.env.example: chứa env example\n")])])]),a("h2",{attrs:{id:"list-rule-va-permission-khi-su-dung"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-rule-va-permission-khi-su-dung"}},[n._v("#")]),n._v(" List rule và permission khi sử dụng")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("Mặc định danh sách các roles và permission sẽ được lưu ở "),a("code",[n._v("package/casbinhelper/constant.go")]),n._v(", Khi cập nhật để thêm roles / permission sẽ cần cập nhật ở cả client và trên package service")])]),n._v(" "),a("li",[a("p",[n._v("VD : Với 1 shop có id là X cần định nghĩa 4 role owner, admin, shop_read, shop_write , trong đó thì")]),n._v(" "),a("ul",[a("li",[n._v("owner và admin có quyền login")]),n._v(" "),a("li",[n._v("shop_read có quyền shop_read")]),n._v(" "),a("li",[n._v("shop_write có quyền shop_write")]),n._v(" "),a("li",[n._v("việc định nghĩa owner inherit role của admin")]),n._v(" "),a("li",[n._v("và admin inherit 2 roles shop_read, shop_write sẽ định nghĩa khi "),a("code",[n._v("casbin client")]),n._v(" gọi sang "),a("code",[n._v("casbin service")]),n._v(" , ở service mình chỉ định nghĩa các roles và quyền của các roles")])])]),n._v(" "),a("li",[a("p",[n._v("Trong file "),a("code",[n._v("package/casbinhelper/constant.go")]),n._v(" quy định các "),a("code",[n._v("roles")]),n._v(" và "),a("code",[n._v("permission")]),n._v(" như sau")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('package casbinhelper\n\nconst (\n\tOWNER_ROLE     = "owner"\n\tADMIN_ROLE     = "admin"\n\tSHOP_READ      = "shop_read"\n\tSHOP_WRITE     = "shop_write"\n)\n\nconst (\n\tLOGIN_PERMISSION          = "login"\n\tSHOP_READ_PERMISSION      = "shop_read"\n\tSHOP_WRITE_PERMISSION     = "shop_write"\n)\n\n')])])]),a("p",[n._v("Trong file "),a("code",[n._v("package/casbinhelper/init.go")]),n._v(" cần khởi tạo các role tương ứng với "),a("code",[n._v("permission")]),n._v(" nào")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("func init() {\n\tmapRolePermission = make(map[string]map[string]bool)\n\tmapScope = make(map[string]bool)\n\tmapRolePermission[OWNER_ROLE] = map[string]bool{\n\t\tLOGIN_PERMISSION: true,\n\t}\n\tmapRolePermission[ADMIN_ROLE] = map[string]bool{\n\t\tLOGIN_PERMISSION: true,\n\t}\n\tmapRolePermission[SHOP_READ] = map[string]bool{\n\t\tSHOP_READ_PERMISSION: true,\n\t}\n\tmapRolePermission[SHOP_WRITE] = map[string]bool{\n\t\tSHOP_WRITE_PERMISSION: true,\n\t}\n}\n\n")])])]),a("p",[n._v("Khi cần định nghĩa thêm role và permission, tạo constant thêm bên file "),a("code",[n._v("package/casbinhelper/constant.go")]),n._v(" và bổ sung bên file "),a("code",[n._v("init.go")]),n._v(" . Sau đó cập nhật các constant bên "),a("code",[n._v("https://github.com/es-hs/authzclient")])]),n._v(" "),a("h3",{attrs:{id:"run-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-locally"}},[n._v("#")]),n._v(" Run locally")]),n._v(" "),a("p",[a("code",[n._v("make watch")]),n._v(" -  Yêu cầu đã chạy redis ở local và sử dụng .env như file example")])])}],!1,null,null,null);e.default=s.exports}}]);