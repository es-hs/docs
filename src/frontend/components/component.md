# Components

## Component là gì?

Component được hiểu đơn giản là phần tử bé nhất của một website. Chúng được cấu thành từ HTML, CSS, JS.

Một số component như: Button, Heading, Text, Image, Icon...

## Cấu trúc cơ bản của một component

Bạn có thể tham khảo code bên dưới, đây là một cấu trúc cơ bản của component với các thành phần: Props, Styles, Function

```tsx
import React from 'react';
import { styled } from '@linaria/react';

type ButtonProps = {
  /**
  Unique id of the component
  */
  uid?: string;
  /**
  Align the button according to the wapper
  */
  align?: 'left' | 'right' | 'center';
  /**
  Set children of button
  */
  children: React.ReactNode;
};

type StyledWrapper = {
  settings?: {
    align?: ButtonProps['align'];
  };
};
const StyledWrapper = styled.div<StyledWrapper>`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
`;

/**
 * Primary UI component for user interaction
 */
export default function Button({ uid, align = 'left', className, children }: ButtonProps) {
  return (
    <StyledWrapper
      className={`${className} sf-component`}
      data-id={uid}
      settings={{
        align,
      }}
    >
      {children}
    </StyledWrapper>
  );
}
```

Mỗi component sẽ có các khu vực:

- Props: Đầu vào của component giúp setting styles, functions... của component
- Styles: Định nghĩa style của từng dom trong component, chúng ta có sử dụng thư viện **@linaria/react** để viết styles linh hoạt hơn
- Function: Là một React Function định nghĩa UI, UX, actions của component

## Cấu tạo chi tiết về Props

```tsx
type ButtonProps = {
  /**
  Unique id of the component
  */
  uid?: string;
  /**
  Align the button according to the wapper
  */
  align?: 'left' | 'right' | 'center';
  /**
  Set children of button
  */
  children: React.ReactNode;
};
```

### Giải thích các thành phần trong props

```tsx
/**
Unique id of the component
*/
```

Phần comment bên trên mỗi prop trong component là giải thích chi tiết về prop đó. Khi bạn định nghĩa ở đây thì trong storybook sẽ hiển thị ra UI cho phép mình review nhanh hơn và nhớ lâu hơn.

```tsx
uid?: string;
```

Định nghĩa kiểu dữ liệu của props. Có thể là string, number, array...

![Storybook Comment Prop](~@/assets/images/storybook-comment-prop.png)

## Cấu tạo chi tiết về Styles

```tsx
theme = {
  align: 'left',
};
const StyledWrapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
`;

<StyledWrapper settings={{ align }}></StyledWrapper>;
```

Phần styles được viết bằng thư viện **@linaria/react** với mục tiêu có thể truyền settings từ Function đến styles và sử dụng tính năng theme global style mà thư viện cung cấp

**Chúng ta có thể viết media responsives trong styled:**

```tsx
const StyledWrapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
  @media (max-width: 1200px) {
    text-align: right;
  }
`;
```

**Hoặc dùng các helper functions đã có sẵn:**

```tsx
import { screen, screenValue } from '@ecomsolid/core';

const props = {
  fontSize: {
    desktop: 48,
    tablet: 33,
    mobile: 33,
  },
};

const StyledWrapper = styled.div`
  font-size: ${({ fontSize }) => fontSize.desktop ?? 14}px;
  ${screen.tablet} {
    font-size: ${({ fontSize }) => fontSize.tablet ?? fontSize.desktop ?? 14}px;
  }
  ${screen.mobile} {
    font-size: ${({ fontSize }) => fontSize.mobile ?? fontSize.tablet ?? fontSize.desktop ?? 14}px;
  }
`;

// Sử dụng helper function
const StyledWrapper = styled.div`
  font-size: ${screenValue('fontSize', 'desktop', 14)}px;
  ${screen.tablet} {
    font-size: ${screenValue('fontSize', 'tablet', 14)}px;
  }
  ${screen.mobile} {
    font-size: ${screenValue('fontSize', 'mobile', 14)}px;
  }
`;
```

> Lưu ý: Chúng ta style theo `desktop-first`

## Cấu tạo chi tiết về Function

```tsx
/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ uid, align = 'left', className, children, fontSize }) => {
  return (
    <div className="sf-component">
      <StyledWrapper data-id={uid} className={className} fontSize={fontSize}>
        {children}
      </StyledWrapper>
    </div>
  );
};

/**
 * Trong trường hợp component không cho phép children chúng ta sẽ sử dụng React.VFC
 */
const Button: React.VFC<ButtonProps> = ({ uid, align = 'left', className, fontSize, text }) => {
  return (
    <div className="sf-component">
      <StyledWrapper data-id={uid} className={className} fontSize={fontSize}>
        {text}
      </StyledWrapper>
    </div>
  );
};
```

Đầu vào của Function là props đã được định nghĩa, các props đó sẽ được lập trình viên quyết định xử dụng trong component như nào

Mỗi component cần có className mặc định là `sf-component` ở thành phần ngoài cùng
