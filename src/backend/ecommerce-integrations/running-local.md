# Localhost

## Bước 1: Setup environment variables
Tạo file `.env` từ `.env.example`
```
cp .env.example .env
```

Generate github token và thay thế vào biến `GITHUB_TOKEN`

Khi đấy file `.env` nhìn sẽ như sau:
![image](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/eff7e10c-42cf-45c4-b194-6ad600e471b9.png)

## Bước 2: Khởi tạo database
### Postgres trên máy local
Tạo ra 2 database postgres tên là `ecommerce_integrations` và `online_store`

### Postgres trên docker
Nếu không cài postgres, dùng docker thì chạy lệnh sau để tạo ra 2  databases
```
docker exec -it postgres_local psql -U postgres -c "CREATE DATABASE ecommerce_integrations"
```
```
docker exec -it postgres_local psql -U postgres -c "CREATE DATABASE online_store"
```
Nếu chưa chạy container postgres thì dùng lệnh sau để chạy:
```
docker start postgres_local
```

## Bước 3: Chạy project

Thêm quyền execute cho các file scripts
```
chmod +x scripts/*
```

Chạy project Woocommerce
```
make woo-watch
```

Chạy project Shopify
```
make shopify-watch
```

## Bước 4 (optional): Seeding data

Woocommerce

```bash
make woo-seeding
```

Shopify

```bash
make shopify-seeding
```
