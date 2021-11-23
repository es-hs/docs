# How to create a control

## Steps

**Step 1:** Tạo file `[control name].vue` trong thư mục: `src/editor/components/section/sidebar/setting/controls`

**Step 2:** Đăng ký control với component render: `RenderControl.vue` ở methods `renderControl(control: Control)`

**Step 3:** Định nghĩa control vào một atom bất kỳ `src/editor/hooks/atom/define`

Ví dụ: sửa trong môt atom Row.json
```json
{
    "tag": "Row",
    "label": "Row",
    "icon": "",
    "settings": [
        {
            "id": "setting",
            "controls": [
                // -------- Register Control -------
                {
                    "id": "test",
                    "type": "input:number",
                    "label": "Input Number TEST",
                    "default": 20,
                    "info": "This is Input Number",
                    "simple": true,
                    "placeholder": "placeholder...",
                    "readonly": false,
                    "min": 10,
                    "max": 100,
                    "devices": {
                        "desktop": {
                            "default": 40
                        },
                        "tablet": {
                            "default": 30
                        },
                        "mobile": {
                            "default": 10
                        }
                    }
                }
                // -------- End Register Control -------
            ]
        },
        {
            "id": "style",
            "controls": [
            ]
        }
    ]
}
```

**Step 4:** Optimize attributes của control. Các attributes chính là props của control

Ví dụ:
```ts
props: {
    min: {
        type: Number,
        default: Number.MIN_SAFE_INTEGER,
    },
    max: {
        type: Number,
        default: Number.MAX_SAFE_INTEGER,
    },
}
```

**Step 5:** Test lại control xem đã hoạt động tốt chưa.

Có các events cần lưu ý:
```ts
emits: ['created', 'onChange', 'change', 'focus', 'blur']]
```

**Step 6:** vào repo `https://github.com/es-hs/docs` để tạo một control mới ở file `basic-controls.md`


## Các lưu ý

