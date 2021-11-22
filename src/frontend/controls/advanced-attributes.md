# Advanced Attributes

## Devices

Thuộc tính `devices` giúp định nghĩa control trên các loại thiết bị như `desktop`, `tablet`, `mobile`. Sau đây là cách sử dụng
```json
{
    "id": "text",
    "type": "input",
    "label": "Text",
    "default": "Lorem Ipsum is simply dummy text",
    "devices": {
        "desktop": {
            "default": "Lorem Ipsum is simply dummy text"
        },
        "tablet": {
            "default": "Lorem Ipsum is simply dummy text"
        },
        "mobile": {
            "default": "Lorem Ipsum is simply dummy text"
        }
    }
}
```