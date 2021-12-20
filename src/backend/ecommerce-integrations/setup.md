# Setup Project

## Cài đặt phần mềm

- [GoLang](https://golang.org/): version 1.17
- [PostgresQL](https://www.postgresql.org/download/): version 12
- Docker (optional): https://docs.docker.com/get-docker/
- Docker Compose (optional): https://docs.docker.com/compose/install/
- Visual Studio Code (recommended): Nên sư dụng VSCode khi làm việc để đồng bộ 1 số convention, config có sẵn với team

>Note: Nếu không muốn cài postgres lên máy thì có thể cài docker và chạy lệnh sau để khởi tạo postgres
```bash
docker run -d \                    
    --name postgres_local \
    -e POSTGRES_PASSWORD=secret \
    -p 54321:5432 \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v /pgdata:/var/lib/postgresql/data \
    postgres:12-alpine
```
Lệnh trên sẽ khởi tạo postgres với thông số:
- Host: localhost
- Port: 54321
- User: postgres
- Password: secret
Để tạo database `db_name` thì dùng lệnh sau:
```
docker exec -it postgres_local psql -U postgres -c "CREATE DATABASE db_name"
```