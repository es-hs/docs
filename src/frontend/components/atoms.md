# Atoms

## Atom là gì?

Atom được hiểu đơn giản là phần tử bé nhất của một website. Chúng được cấu thành từ HTML, CSS, JS.

Một số atom như: Button, Heading, Text, Image, Icon...

## Cấu trúc cơ bản của một atom

Bạn có thể tham khảo code bên dưới, đây là một cấu trúc cơ bản của atom với các thành phần: Props, Styles, Function

```tsx
import React from "react";
import styled from "styled-components";

type ButtonProps = {
  /**
  Unique id of the atom
  */
  uid?: string;
  /**
  Align the button according to the wapper
  */
  align?: "left" | "right" | "center";
  /**
  Set children of button
  */
  children: React.ReactNode;
};

type StyledWrapper = {
  settings?: {
    align?: ButtonProps['align']
  }
}
const StyledWrapper = styled.div<StyledWrapper>`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
`;

/**
 * Primary UI component for user interaction
 */
export default function Button({ uid, align = "left", children }: ButtonProps) {
  return (
    <StyledWrapper
      className={`hs-atom`}
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

Mỗi atoms sẽ có các khu vực:

- Props: Đầu vào của atom giúp setting styles, functions... của atom
- Styles: Định nghĩa style của từng dom trong component, chúng ta có sử dụng thư viện **styled-components** để viết styles linh hoạt hơn
- Function: Là một React Function định nghĩa UI, UX, actions của atom

## Cấu tạo chi tiết về Props

```tsx
type ButtonProps = {
  /**
  Unique id of the atom
  */
  uid?: string;
  /**
  Align the button according to the wapper
  */
  align?: "left" | "right" | "center";
  /**
  Set children of button
  */
  children: React.ReactNode;
};
```

### Giải thích các thành phần trong props

```tsx
/**
Unique id of the atom
*/
```

Phần comment bên trên mỗi prop trong atom là giải thích chi tiết về prop đó. Khi bạn định nghĩa ở đây thì trong storybook sẽ hiển thị ra UI cho phép mình review nhanh hơn và nhớ lâu hơn.

```tsx
uid?: string;
```

Định nghĩa kiểu dữ liệu của props. Có thể là string, number, array...

![Storybook Comment Prop](~@/assets/images/storybook-comment-prop.png)

## Cấu tạo chi tiết về Styles

```tsx
theme = {
  align: "left",
};
const StyledWrapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
`;

<StyledWrapper settings={{ align }}></StyledWrapper>;
```

Phần styles được viết bằng thư viện **styled-components** với mục tiêu có thể truyền settings từ Function đến styles và sử dụng tính năng theme global style mà thư viện cung cấp

**Chúng ta có thể viết media responsives trong styled:**

```tsx
const StyledWrapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
  @media (max-width: 1200px) {
    text-align: right;
  }
`;
```

**Trong styled chúng ta có thể viết functions:**

Chúng ta sẽ sử dụng một vòng for để lặp ra các màn hình trong global style đã định nghĩa.

```tsx
import forDevices from "../helpers/forDevices";

theme = {
  devices: {
    mobile: '767px',
    tablet: '1024px',
    desktop: '',
  },
  typography: {
    primary: {
      size: {
        mobile: '33px',
        tablet: '33px',
        desktop: '48px',
      }
    }
  }
};

const StyledWrapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
  ${({ theme, settings }) =>
    forDevices(theme?.devices, (key: NameDevices, media: string): string => {
      let styles = "";
      let size =
        theme.typography.primary.size &&
        theme.typography.primary.size[key];
      if (size) {
        styles += `font-size: ${size};`;
      }
      if (styles) {
        return `
          @media (max-width: ${media}) {
            ${styles}
          }
        `;
      }
      return "";
    })}
`;
```

## Cấu tạo chi tiết về Function

```tsx
/**
 * Primary UI component for user interaction
 */
export default function Button({ uid, align = "left", children }: ButtonProps) {
  return (
    <StyledWrapper
      className={`hs-atom`}
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

Đầu vào của Function là props đã được định nghĩa, các props đó sẽ được lập trình viên quyết định xử dụng trong atom như nào
