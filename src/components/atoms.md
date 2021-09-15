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

const StyledWapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
`;

/**
 * Primary UI component for user interaction
 */
export default function Button({ uid, align = "left", children }: ButtonProps) {
  return (
    <StyledWapper
      className={`hs-atom`}
      data-id={uid}
      settings={{
        align,
      }}
    >
      {children}
    </StyledWapper>
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
const StyledWapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
`;

<StyledWapper settings={{ align }}></StyledWapper>;
```

Phần styles được viết bằng thư viện **styled-components** với mục tiêu có thể truyền settings từ Function đến styles và sử dụng tính năng theme global style mà thư viện cung cấp

**Chúng ta có thể viết media responsives trong styled:**

```tsx
const StyledWapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
  @media (max-width: 1200px) {
    text-align: right;
  }
`;
```

**Trong styled chúng ta có thể viết functions:**

Chúng ta sẽ sử dụng một vòng for để lặp ra các màn hình trong global style đã định nghĩa.

```tsx
import forResponsives from "../helpers/forResponsives";

theme = {
  responsives: {
    md: "1200px",
    sm: "992px",
    xs: "576px",
    default: "",
  },
  typography: {
    heading_large: {
      size: {
        default: "51px",
        md: "51px",
        sm: "44px",
        xs: "44px",
      },
    },
    heading: {
      size: {
        default: "38px",
        md: "38px",
        sm: "33px",
        xs: "33px",
      },
    },
    heading_small: {
      size: {
        default: "28px",
        md: "28px",
        sm: "24px",
        xs: "24px",
      },
    },
    sub_heading: {
      size: {
        default: "21px",
        md: "21px",
        sm: "19px",
        xs: "19px",
      },
    },
    body: {
      size: {
        default: "16px",
        md: "16px",
        sm: "14px",
        xs: "14px",
      },
    },
    small: {
      size: {
        default: "12px",
        md: "12px",
        sm: "11px",
        xs: "11px",
      },
    },
  },
};

const getSizeByLevel = (settings: any) => {
  switch (settings?.level) {
    case 1:
      return "heading_large";
    case 2:
      return "heading";
    case 3:
      return "heading_small";
    case 4:
      return "sub_heading";
    default:
      return "heading";
  }
};

const StyledWapper = styled.div`
  text-align: ${({ theme, settings }) => settings?.align || theme.align};
  ${({ theme, settings }) =>
    forResponsives(theme.responsives, (key: string, media: string): string => {
      let styles = "";
      let size =
        theme.typography[getSizeByLevel(settings)].size &&
        theme.typography[getSizeByLevel(settings)].size[key];
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
    <StyledWapper
      className={`hs-atom`}
      data-id={uid}
      settings={{
        align,
      }}
    >
      {children}
    </StyledWapper>
  );
}
```

Đầu vào của Function là props đã được định nghĩa, các props đó sẽ được lập trình viên quyết định xử dụng trong atom như nào
