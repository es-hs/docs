(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{444:function(t,s,a){"use strict";a.r(s);var e=a(31),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),a("h2",{attrs:{id:"tao-component-moi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tao-component-moi"}},[t._v("#")]),t._v(" Tạo component mới")]),t._v(" "),a("ul",[a("li",[t._v("Copy thư mục "),a("code",[t._v("src/templates/component")]),t._v(" vào thư mục "),a("code",[t._v("src/packages")]),t._v(" và đổi tên thư mục "),a("code",[t._v("component")]),t._v(" thành tên package mới.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Ví dụ: "),a("code",[t._v("src/templates/component")]),t._v(" -> "),a("code",[t._v("src/packages/rate")])])]),t._v(" "),a("ul",[a("li",[t._v("Đổi tên package name trong "),a("code",[t._v("src/packages/rate/package.json")]),t._v(" thành tên package mới.")])]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("{\n"),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' "name": "@ecomsolid/label",\n')])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' "name": "@ecomsolid/rate",\n')])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" ...\n")])]),t._v("}\n")])])]),a("ul",[a("li",[t._v("Đổi tên prefix trong "),a("code",[t._v("src/packages/rate/linaria.config.js")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("module.exports = {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" evaluate: true,\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" displayName: process.env.NODE_ENV !== 'production',\n")])]),a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[a("span",{pre:!0,attrs:{class:"token prefix deleted"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" classNameSlug: (hash) => `prefix_${hash}`,\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" classNameSlug: (hash) => `rate_${hash}`,\n")])]),t._v("};\n")])])]),a("h2",{attrs:{id:"tich-hop-component-vao-storybook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tich-hop-component-vao-storybook"}},[t._v("#")]),t._v(" Tích hợp component vào Storybook")]),t._v(" "),a("ul",[a("li",[t._v("Thêm package vừa tạo vào dependencies của Storybook")])]),t._v(" "),a("p",[a("code",[t._v("ui/storybook/package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("{\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" ...\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(' "dependencies": {\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v('   "@ecomsolid/button": "*",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v('   "@ecomsolid/image": "*",\n')]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("   ...\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v('   "@ecomsolid/rate": "*"\n')])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" },\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" ...\n")])]),t._v("}\n")])])]),a("ul",[a("li",[t._v("Cập nhật "),a("code",[t._v("content")]),t._v(" trong "),a("code",[t._v("tailwind.config.js")]),t._v(" của Storybook")])]),t._v(" "),a("p",[a("code",[t._v("ui/storybook/tailwind.config.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("module.exports = {\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" presets: [require('@ecomsolid/core/lib/theme.preset').default],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" content: [\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("   './stories/**/*.{js,ts,jsx,tsx}',\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("   ...\n")])]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[a("span",{pre:!0,attrs:{class:"token prefix inserted"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v("   '../../packages/rate/src/**/*.{js,ts,jsx,tsx}',\n")])]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" ],\n")]),a("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[t._v(" ")]),a("span",{pre:!0,attrs:{class:"token line"}},[t._v(" ...\n")])]),t._v("};\n\n")])])]),a("ul",[a("li",[t._v("Chạy lệnh cài đặt")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Chạy lệnh xây dựng để đóng gói các package")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n")])])]),a("h2",{attrs:{id:"phat-trien-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phat-trien-component"}},[t._v("#")]),t._v(" Phát triển component")]),t._v(" "),a("ul",[a("li",[t._v("Start Storybook")])]),t._v(" "),a("blockquote",[a("p",[t._v("Mở 1 termial và chạy lệnh sau:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev\n")])])]),a("ul",[a("li",[t._v("Watch package")])]),t._v(" "),a("blockquote",[a("p",[t._v("Mở 1 termial khác và chạy lệnh sau:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" @ecomsolid/rate\n")])])]),a("blockquote",[a("p",[t._v("Nếu muốn watch tất cả các package thì dùng lệnh "),a("code",[t._v("yarn watch:all")])])]),t._v(" "),a("ul",[a("li",[t._v("Tạo file "),a("code",[t._v("Rate.stories.tsx")]),t._v(" thư mục "),a("code",[t._v("ui/storybook/stories")])])]),t._v(" "),a("p",[a("code",[t._v("ui/storybook/stories/Rate.stories.tsx")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-tsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ComponentStory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ComponentMeta "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@storybook/react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Rate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ecomsolid/rate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ecomsolid/rate/lib/styles.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Component/General/Rate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Rate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// More on argTypes: https://storybook.js.org/docs/react/api/argtypes")]),t._v("\n  argTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ComponentMeta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ComponentStory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rate")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token spread"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// More on args: https://storybook.js.org/docs/react/writing-stories/args")]),t._v("\nSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Lưu ý: Trong khi phát triển có thể gặp lỗi tại Storybook báo không load được component. Đừng hoảng sợ, chỉ cần F5 (Refresh) lại trình duyệt.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);