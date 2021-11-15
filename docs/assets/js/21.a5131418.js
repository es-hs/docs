(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{187:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Đầu tiên thì chúng ta cần có kiến thức về GraphQL nói chung, xem thêm "),a("a",{attrs:{href:"https://graphql.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tại đây"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Docs setup này sẽ lấy ví dụ của module "),a("code",[t._v("theme_template")]),t._v(" của repo "),a("a",{attrs:{href:"https://github.com/es-hs/app-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("app-api"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("ul",[t._m(3),t._v(" "),a("li",[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("Sử dụng hàm "),a("a",{attrs:{href:"https://github.com/es-hs/app-api/graph/types.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("graph.NewEdgesGraphQL"),a("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)]),t._v(" "),t._m(19)]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("Để init schema của nhiều module thì chỉ cần gọi như sau:")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dinh-nghia-schema-cua-1-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dinh-nghia-schema-cua-1-module"}},[this._v("#")]),this._v(" Định nghĩa schema của 1 module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Ở mỗi 1 module, trong "),e("code",[this._v("modules/theme_template/delivery/graphql")]),this._v(" sẽ gồm 3 files:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("theme_template.graphql:")]),this._v(" File tác dụng định nghĩa cấu trúc schema của module hiện tại theo cú pháp chuẩn của GraphQL")]),this._v(" "),e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/02494bbe-a380-460e-9123-e579de7d51b0.png",alt:"image"}})]),this._v(" "),e("p",[this._v("Ở file này chúng ta sẽ định nghĩa các model, query và mutation của module này, định nghĩa ở file này chỉ có tác dụng giúp chúng ta nhìn trực quan module này gồm những gì, từ đấy định nghĩa tương ứng vào code ở 2 files còn lại")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("theme_template_schema.go:")]),this._v(" File định nghĩa schema ớ phía code của Go dựa vào file "),e("code",[this._v("theme_template.graphql")]),this._v(" bên trên.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/500122f8-db27-4674-b39c-a99b0fbe791b.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Từ file "),e("code",[this._v("theme_template.graphql")]),this._v(" bên trên chúng ta định nghĩa ra được:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Queries:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/e752e5f3-a369-48e6-926c-f98bed9938d8.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Mutations:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/7eb648e6-8cee-4a2f-94ec-2ea3f18c7465.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Model:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Sử dụng "),e("code",[this._v("graphql.NewObject")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/15c9e831-b580-4933-ba1e-ebc81c0cd55b.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Pagination and Edges:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/fdd8940b-d648-4fe5-ab5b-fb4f7c2df5a1.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Input của mutations:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Sử dụng "),e("code",[this._v("graphql.NewInputObject")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/f3047ddc-1189-4ddf-b53d-a406a0597fac.png",alt:"image"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("p",[a("strong",[t._v("theme_template_resolver.go:")]),t._v(" File định nghĩa code xử lý của queries và mutations đã định nghĩa bên trên")]),t._v(" "),a("p",[t._v("Định nghĩa interface gồm các function tương ứng với các queries và mutations đã định nghĩa bên trên")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/d912c76d-e593-46a1-92b7-664154218481.png",alt:"image"}})]),t._v(" "),a("p",[t._v("Resolver ở đây sẽ tương ứng với controller trong mô hình MVC, đối với cấu trúc của các project của "),a("code",[t._v("es-hs")]),t._v(" hiện tại thì resolver ở nằm ở phần delivery trong mô hình sau:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/bxcodec/go-clean-arch/raw/master/clean-arch.png",alt:"image"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"register-graphql-cua-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-graphql-cua-module"}},[this._v("#")]),this._v(" Register GraphQL của module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Sau đi đã định nghĩa xong cả 3 files thì ở file "),e("code",[this._v("server.go")]),this._v(" gọi function init graphql của module này như sau:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/12482659-d51c-4d09-9ca1-25711af15ca9.png",alt:"image"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Line 81:")]),t._v(" Init instance của module "),a("code",[t._v("theme_template")]),t._v(" "),a("strong",[t._v("Line 82:")]),t._v(" Register queries của module "),a("code",[t._v("theme_template")]),t._v(" "),a("strong",[t._v("Line 83:")]),t._v(" Register mutations của module "),a("code",[t._v("theme_template")]),t._v(" "),a("strong",[t._v("Line 85-105:")]),t._v(" Khởi tạo GraphQL Schema của toàn bộ project")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"resgiter-nhieu-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resgiter-nhieu-modules"}},[this._v("#")]),this._v(" Resgiter nhiều modules")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/dd2146da-8f98-4486-9fd0-feffeffd3604.png",alt:"image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using"}},[this._v("#")]),this._v(" Using")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[t._v("Set argument của query/mutation is required: "),a("code",[t._v("graphql.NewNonNull()")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/c918b7af-c7db-48b6-aebe-c42e3f88f90c.png",alt:"image"}})])]),t._v(" "),a("li",[a("p",[t._v("Set select params của query/mutation is required: "),a("code",[t._v("graphql.NewNonNull()")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/41d60ce8-b7f7-40a9-989e-4c211e5ad3fb.png",alt:"image"}})])]),t._v(" "),a("li",[a("p",[t._v("Declare enum value: "),a("code",[t._v("graphql.NewEnum()")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/486e50d6-1733-4cc6-9985-f41b9a5e01b7.png",alt:"image"}})]),t._v(" "),a("p",[t._v("Then register it in "),a("code",[t._v("server.go")]),t._v(" in "),a("code",[t._v("Types")]),t._v(" field")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/0c15d0d8-0ba7-4d88-9337-e129737d5eec.png",alt:"image"}})])]),t._v(" "),a("li",[a("p",[t._v("Query/mutation array of object: "),a("code",[t._v("graphql.NewList()")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/b0858cdb-122f-4aac-878f-47be7e9a0c65.png",alt:"image"}})])])])}],!1,null,null,null);e.default=n.exports}}]);