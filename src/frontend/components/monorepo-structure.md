# Kiến trúc Monorepo

## Công nghệ phát triển

### Các công nghệ chính

- **[Yarn](https://classic.yarnpkg.com/en/)**: Tool lý các gói
- **[Lerna](https://lerna.js.org/)**: Tool quản lý monorepo
- **[Rollup](https://rollupjs.org/guide/en/)**: Tool xây dựng và đóng gói các component
- **[Typescript](https://www.typescriptlang.org/)**: Static Type Checking
- **[Linaria](https://linaria.dev/)**: Thư viện sử dụng để tạo style động với React
- **[Tailwind](https://tailwindcss.com/)**: Thư viện sử dụng làm thư viện style chính
- **[Jest](https://jestjs.io/)**: Test framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)**: Test framework for React
- **[Storybook](https://storybook.js.org/)**: UI testing tool

### Các công cụ khác

- **[ESLint](https://eslint.org/)**: Tool phân tích và lọc lỗi cho code
- **[Prettier](https://prettier.io/)**: Tool format code
- **[commitlint](https://commitlint.js.org/)**: Tool chuẩn hóa cho commit message

## Cấu trúc thư mục

```tree
.
├── packages                # Thư mục chính chứa các component
│   ├── component-a         # Gói chứa component-a
│   │   ├── ...
│   │   ├── package.json    # Thông tin component (Tên gói, các phục thuộc kèm theo, ...)
│   │   ├── README.md       # Mô tả về component (Cài đặt, cách dùng, ...)
│   │   └── ...
│   ├── component-b
│   │   └── ...
│   └── component-c
│       └── ...
├── ...
├── templates               # Thư mục chứa code mẫu của 1 component (Sử dụng khi tạo component mới)
│   ├── ...
│   ├── package.json
│   ├── README.md
│   └── ...
├── ...
├── lerna.json              # Thông tin của lerna
├── package.json
└── tsconfig.json           # Cấu hình chung của Typescript sẽ được kế thừa bởi các component
```

## Các câu lệnh phát triển

- **Cài đặt**

```bash
yarn install
```

> Cài đặt các phụ thuộc của toàn dự án

- **Phát triển**

```bash
yarn dev
```

> Câu lệnh này sẽ chạy Storybook

- **Watch**

```bash
yarn watch
```

> Câu lệnh này sẽ đi vào các package và chạy script `watch` được định nghĩa trong các package

> Lệnh `watch` được thêm vào các package với mục đích theo dõi các thay đổi của package và `build` lại các component

- **Linter**

```bash
yarn lint
```

> Câu lệnh này sẽ đi vào các package trong `packages` và chạy script `lint` được định nghĩa trong các package

- **Test**

```bash
yarn test
```

> Tương tự lệnh `lint`. Câu lệnh này sẽ đi vào các package và chạy script `test` được định nghĩa trong các package

- **Preview**

```bash
yarn preview
```

> Đang cập nhật

- **Bootstrap**

```bash
yarn bootstrap
```

> Liên kết các package nội bộ với nhau và cài đặt các phụ thuộc còn lại

> Sử dụng trong trường hợp thêm 1 package nội bộ vào 1 package nội bộ khác (Lưu ý: Không thêm chéo nhau)

- **Build**

```bash
yarn build
```

> Xây dựng các package trong `packages` và có thể publish lên registry
