# Cấu trúc Component

> Phần này sẽ giải thích chi tiết về ý nghĩa của các file trong component

```
.
├── src
│   ├── __tests__
│   │   └── ComponentName.test.tsx
│   ├── index.ts
│   ├── config.ts
│   └── ComponentName.tsx
├── .babelrc
├── .gitignore
├── .npmignore
├── jest.config.ts
├── jest.setup.ts
├── linaria.config.js
├── package.json
├── README.md
├── rollup.config.js
└── tsconfig.json

```

**Giải thích ý nghĩa:**

- **src**: Thư mục chính để phát triển component
- **src/config.ts**: Tập tin cấu hình của component dành cho builder
- **src/tests**: Thư mục chứa các file test của component
- **.babelrc**: Cấu hình `babel`. Được kế thừa từ `.babelrc` của `config` trong thư mục `packages/config`
- **.gitignore**: Cấu hình để bỏ qua các file trong thư mục hiện tại khi đưa lên `git`
- **.npmignore**: Cấu hình để bỏ qua các file trong thư mục hiện tại khi đóng gói và đẩy lên **Registry**
- **jest.config.ts**: Cấu hình để chạy test
- **jest.setup.ts**: Cấu hình để chạy test
- **linaria.config.js**: Cấu hình để chuyển đổi định dạng CSS class của `linaria`

> Chú ý: Cần đổi lại prefix theo component mới

```js
// VD: component `Button`
module.exports = {
  evaluate: true,
  displayName: process.env.NODE_ENV !== 'production',
  classNameSlug: (hash) => `button_${hash}`,
};
```

- **package.json**: Thông tin của dự án

```json
{
  "name": "@ecomsolid/component-name",
  "private": false
}
```

> Tên cần đặt `unique`

> Thuộc tính `private` nếu có giá trị là true thì dự án sẽ không được build và đẩy lên **Registry**

- **README.md**: Mô tả về dự án
- **rollup.config.js**: Cấu hình để đóng gói component
- **tsconfig.json**: Cấu hình của TypeScript được kế thừa từ `tsconfig.json` trong thư mục gốc của dự án
