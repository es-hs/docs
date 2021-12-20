# Tutorial

## Tạo component mới

- Copy thư mục `src/templates/component` vào thư mục `src/packages` và đổi tên thư mục `component` thành tên package mới.

> Ví dụ: `src/templates/component` -> `src/packages/rate`

- Đổi tên package name trong `src/packages/rate/package.json` thành tên package mới.

```diff
{
- "name": "@ecomsolid/label",
+ "name": "@ecomsolid/rate",
  ...
}
```

- Đổi tên prefix trong `src/packages/rate/linaria.config.js`.

```diff
module.exports = {
  evaluate: true,
  displayName: process.env.NODE_ENV !== 'production',
- classNameSlug: (hash) => `prefix_${hash}`,
+ classNameSlug: (hash) => `rate_${hash}`,
};
```

## Tích hợp component vào Storybook

- Thêm package vừa tạo vào dependencies của Storybook

`ui/storybook/package.json`:

```diff
{
  ...
  "dependencies": {
    "@ecomsolid/button": "*",
    "@ecomsolid/image": "*",
    ...
+   "@ecomsolid/rate": "*"
  },
  ...
}
```

- Cập nhật `content` trong `tailwind.config.js` của Storybook

`ui/storybook/tailwind.config.js`:

```diff
module.exports = {
  presets: [require('@ecomsolid/core/lib/theme.preset').default],
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    ...
+   '../../packages/rate/src/**/*.{js,ts,jsx,tsx}',
  ],
  ...
};

```

- Chạy lệnh cài đặt

```bash
yarn install
```

- Chạy lệnh xây dựng để đóng gói các package

```bash
yarn build
```

## Phát triển component

- Start Storybook

> Mở 1 termial và chạy lệnh sau:

```bash
yarn dev
```

- Watch package

> Mở 1 termial khác và chạy lệnh sau:

```bash
yarn watch @ecomsolid/rate
```

> Nếu muốn watch tất cả các package thì dùng lệnh `yarn watch:all`

- Tạo file `Rate.stories.tsx` thư mục `ui/storybook/stories`

`ui/storybook/stories/Rate.stories.tsx`:

```tsx
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Rate from '@ecomsolid/rate';
import '@ecomsolid/rate/lib/styles.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/General/Rate',
  component: Rate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Rate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rate> = (args) => <Rate {...args} />;

export const Size = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size.args = {};
```

> Lưu ý: Trong khi phát triển có thể gặp lỗi tại Storybook báo không load được component. Đừng hoảng sợ, chỉ cần F5 (Refresh) lại trình duyệt.
