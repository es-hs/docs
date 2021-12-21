# Step by Step

Phần dưới đây là các bước cần thiết để bắt đầu phát triển một `Component` với `React`.

**Quy ước:**

- `R` - **Rule**: Bắt buộc phải tuân thủ
- `P` - **Principle**: Quy tắc chung nên tuân thủ

## B1: Tạo nhánh phát triển mới

```bash
git checkout main
git pull origin main

git checkout -b feature/feature-name
```

## B2: Lên danh sách các chức năng

> VD: Component Button

- Cấu hình alignment: **left | center | right** (responsive)
- Thay đổi kích thước: **large | medium | small** (responsive)
- Đổi style theo theme: **primary | secondary**
- Đổi HTML Type: **submit | button | reset**
- Full width (responsive)
- Thêm svg icon
- Hỗ trợ loading state
- Render như một hyperlink nếu prop `href` được truyền vào

> Lưu ý: Có thể lên danh sách vào file sheet hoặc list luôn trên task được assign trên ClickUp.

## B3: Định nghĩa các thuộc tính(props)

- `P`Các props name cần đặt ngắn ngọn và có ý nghĩa.
- `P`Cần kế thừa các props mặc định của DOM element.
- `R`Các thuộc tính truyền vào sẽ là `optional` vì thế cần xem xét giá trị mặc định đồng thời kiểm tra `null` và `undefined` trước khi dùng.

<strong style="color: green">Best practice:</strong>

- `P`Component nên hỗ trợ các thuôc tính mặc định của DOM

```tsx
type ButtonProps = {
  loading?: boolean;
} & JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return <button {...rest}>{loading ? <Icon name="loading" /> : children}</button>;
};

// Sử dụng

<Button className="btn btn-primary" type="submit">
  <span>Click here</span>
</Button>;
```

- `P`Tránh override các thuộc tính mặc định của DOM. Nếu override cần bỏ(Omit) type mặc định và có prop thay thế.

```tsx{11-12}
type ButtonProps = {
  loading?: boolean;
  type?: 'primary' | 'secondary';
  htmlType?: JSX.IntrinsicElements['button']['type'];
} & Omit<JSX.IntrinsicElements['button'], 'type'>;

const Button: React.FC<ButtonProps> = ({ children, loading, className, htmlType, ...rest }) => {
  return (
    <button
      {...rest}
      type={htmlType}
      className={`${className} ${type === 'primary' ? 'primary' : 'secondary'}`}
    >
      {loading ? <Icon name="loading" /> : children}
    </button>
  );
};

// Sử dụng

<Button className="btn btn-primary" type="primary" htmlType="button">
  <span>Submit</span>
</Button>;
```

- `R`Các component luôn có thuộc tính `uid` được truyền vào. Thuộc tính này cần được thêm vào lớp ngoài cùng của component.
- `R`Lớp ngoài cùng cũng cần được thêm 1 thuộc tính là `data-type="component"`.
- `R`Nếu component cho phép chứa các component khác bên trong thì cần thêm 1 div có thuộc tính `data-slot="children"` khi children chưa được truyền vào

```tsx
import { isValidElement } from 'react';
type BoxProps = {
  uid: string;
} & JSX.IntrinsicElements['div'];

const Box: React.FC<BoxProps> = ({ children, uid, ...rest }) => {
  return (
    <div {...rest} data-uid={uid} data-type="component">
      {isValidElement(children) ? children : <div data-slot="children"></div>}
    </div>
  );
};
```

## B4: Develop

Sau khi đã có các thuộc tính được định nghĩa từ Bước 2. Chúng ta bắt đầu vào xây dựng logic và style cho component.

```tsx
import { styled } from '@linaria/react';
import { cls, screen, screenValue, getByScreen } from '@ecomsolid/core';
import type { BaseProps, ObjectDevices } from '@ecomsolid/core';

const StyledLabel = styled.label`
  font-size: ${({ fontSize }) => fontSize?.desktop || '1rem'};
  ${screen.tablet} {
    font-size: ${({ fontSize }) => fontSize?.tablet ?? fontSize?.desktop ?? '1rem'};
  }
  ${screen.mobile} {
    font-size: ${({ fontSize }) =>
      fontSize?.mobile ?? fontSize?.tablet ?? fontSize?.desktop ?? '1rem'};
  }
`;

// Hoặc dùng các hàm helper của @ecomsolid/core
const StyledLabel = styled.label`
  font-size: ${screenValue('fontSize', 'desktop', '1rem')};
  ${screen.tablet} {
    font-size: ${screenValue('fontSize', 'tablet', '1rem')};
  }
  ${screen.mobile} {
    font-size: ${({ fontSize }) => getByScreen(fontSize, 'mobile', '1rem')};
  }
`;

type LabelProps = BaseProps & {
  text?: string;
  fontSize?: string;
} & JSX.IntrinsicElements['label'];

const Label: React.VFC<LabelProps> = ({ text, uid, className, ...rest }) => {
  return (
    <StyledLabel {...rest} data-uid={uid} className={cls('sf-component', className)}>
      {text}
    </StyledLabel>
  );
};
```

<strong style="color: green">Best practice:</strong>

- `P`Đối với component không cho phép truyền `children` nên dùng `React.VFC` để định nghĩa component
- `P`Style động chỉ dùng với các thuộc tính được truyền động từ ngoài vào. <br/>
  VD: `fontSize`, `color`, `backgroundColor`, `borderRadius`, ...
- `P`Các thuộc tính đã biết trước giá trị chúng ta sẽ dùng class trong Tailwind của nó. <br/>
  VD: `sf-font-semibold`, `sf-inline-flex`, ...
- `R`Khi style cho phần `responsive` cần style từ màn to về màn nhỏ vì chúng ta phát triển `Desktop First`.

## B5: Tích hợp với Storybook

Chi tiết xem tại [Đây](/frontend/components/tutorial.html#tich-hop-component-vao-storybook)

> Chú ý: Cần test trên các device khác nhau.

## B6: Định nghĩa cấu hình cho builder

Sau khi phát triển xong component chúng ta cần định nghĩa cấu hình cho phần builder.

VD:

```json{6,16}
{
  "tag": "Label",
  "label": "Label",
  "settings": [
    {
      "id": "setting",
      "controls": [
        {
          "id": "text",
          "label": "Label content",
          "type": "input"
        }
      ]
    },
    {
      "id": "style",
      "controls": [
        {
          "id": "fontSize",
          "label": "Font Size",
          "type": "input:number",
          "devices": {
            "desktop": { "default": "1rem" },
            "tablet": { "default": "0.8rem" },
            "mobile": { "default": "0.6rem" }
          }
        }
      ]
    }
  ]
}
```

> Chú ý: Chúng ta có thể định nghĩa cấu hình bằng file `json` hoặc `js` tuy nhiên nên sử dụng `js` để định nghĩa vì sẽ hỗ trợ TypeChecking của TypeScript.

<strong style="color: green">Best practice:</strong>

- `P`Các phần liên quan đến style sẽ chuyển qua `style` area: VD: `fontSize`, `color`, `backgroundColor`, `borderRadius`, ...
- `P`Các phần liên quan đến dữ liệu sẽ chuyển qua `setting` area: VD: `src`, `alt`, `href`, `text`, `aria-label` ...

## B7: Finish

- Đẩy code lên nhánh `feature/feature-name` đã tạo
- Tạo pull request với nhánh `main`
- Xóa branch `feature/feature-name` sau khi đã phát triển xong
