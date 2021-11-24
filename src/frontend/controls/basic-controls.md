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
![Control input number](~@/assets/images/controls/input-unit.png)

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
![Control input number](~@/assets/images/controls/input-fix-content.png)

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
    ],
}
```
