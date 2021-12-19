# Basic Controls

## Input

Image:
![Control input](~@/assets/images/controls/input.png)

Define:

```json
{
  "id": "text",
  "type": "input",
  "label": "Text",
  "default": "Lorem Ipsum is simply dummy text"
}
```

Advanced Attributes:

```json
{
  "readonly": true // Định nghĩa input chỉ đọc
}
```

## Input Number

Image:
![Control input number](~@/assets/images/controls/input-number.png)

Define:

```json
{
  "id": "test",
  "type": "input:number",
  "label": "Input Number TEST"
}
```

Advanced Attributes:

```json
{
  "min": 10,
  "max": 100,
  "placeholder": "placeholder...",
  "readonly": true // Định nghĩa input chỉ đọc
}
```

## Input Unit

Image:
![Control input unit](~@/assets/images/controls/input-unit.png)

Define:

```json
{
  "id": "test",
  "type": "input:unit",
  "label": "Input Unit TEST"
}
```

Advanced Attributes:

```json
{
  "min": 10,
  "max": 100,
  "placeholder": "placeholder...",
  "units": ["em", "px"],
  "readonly": true // Định nghĩa input chỉ đọc
}
```

## Input Fix Content

Image:
![Control input fix content](~@/assets/images/controls/input-fix-content.png)

Define:

```json
{
  "id": "productSaleOff",
  "type": "input:fixContent",
  "label": "Product Sale Off",
  "default": "Sale off [!Profit!] %"
}
```

Advanced Attributes:

```json
{
  "readonly": true // Định nghĩa input chỉ đọc
}
```

## Select

Image:
![Control select](~@/assets/images/controls/select.png)

Define:

```json
{
  "id": "tag",
  "type": "select",
  "label": "Tag",
  "default": "p",
  "options": [
    {
      "value": "p",
      "label": "P"
    },
    {
      "value": "span",
      "label": "Span"
    }
  ]
}
```

## Textarea

Image:
![Control textarea](~@/assets/images/controls/textarea.png)

Define:

```json
{
  "id": "test",
  "type": "textarea",
  "label": "Textarea TEST",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "placeholder": "placeholder...",
  "minHeight": 50,
  "maxHeight": 300,
  "readonly": true // Định nghĩa input chỉ đọc
}
```

## Toggle

Image:
![Control toggle](~@/assets/images/controls/toggle.png)

Define:

```json
{
  "id": "test",
  "type": "toggle",
  "label": "Toggle TEST",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "readonly": true // Định nghĩa input chỉ đọc
}
```

## Radio

Image:
![Control input radio](~@/assets/images/controls/radio.png)

Define:

```json
{
  "id": "Radio",
  "type": "radioGroup",
  "label": "Radio Group",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "options": [
    {
      "text": "Unset",
      "desc": "",
      "value": "unset"
    },
    {
      "text": "None",
      "desc": "",
      "value": "none"
    },
    {
      "text": "Initial",
      "desc": "",
      "value": "initial"
    }
  ]
}
```

## Checkbox

Image:
![Control input checkbox](~@/assets/images/controls/checkbox.png)

Define:

```json
{
  "id": "Checkbox",
  "type": "checkbox",
  "label": "Checkbox Group",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "options": [
    {
      "text": "Unset",
      "desc": "",
      "value": "unset"
    },
    {
      "text": "None",
      "desc": "",
      "value": "none"
    },
    {
      "text": "Initial",
      "desc": "",
      "value": "initial"
    }
  ]
}
```

## Position

Image:
![Control position](~@/assets/images/controls/position.png)

Define:

```json
{
  "id": "Position",
  "type": "position",
  "label": "Position TEST",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "default": {
      "x": "50%",
      "y": "50%"
  },
  "info": "This is Position"
}
```

## Margin

Image:
![Control margin](~@/assets/images/controls/margin.png)

Define:

```json
{
  "id": "Margin",
  "label": "Margin",
  "type": "margin",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "default": {
      "top": "20px",
      "left": "20px",
      "right": "20px",
      "bottom": "20px"
  },
  "info": "This is Margin test",
}
```

## Padding

Image:
![Control padding](~@/assets/images/controls/padding.png)

Define:

```json
{
  "id": "Padding",
  "label": "Padding",
  "type": "padding",
  "simple": true
}
```

Advanced Attributes:

```json
{
  "default": {
      "top": "20px",
      "left": "20px",
      "right": "20px",
      "bottom": "20px"
  },
  "info": "This is Padding test",
}
```