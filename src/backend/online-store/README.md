## Setup

### Install dependencies

- GoLang: version 1.17
- Docker: https://docs.docker.com/get-docker/
- Docker Compose: https://docs.docker.com/compose/install/
- After installing docker, create a network for es-hs by using the command

```bash
docker network create es-hs
```

### Environment variables

- Create new env file called `.env`, clone from `.env.example`
- Update `GITHUB_TOKEN` variable by going to [here](https://github.com/settings/tokens)

## Project structure

Referring from these repositories

- https://github.com/bxcodec/go-clean-arch
- https://github.com/golang-standards/project-layout

## For Online Store

### Run locally

```bash
make watch
```

If you update Dockerfile, rebuild by the command

```bash
make down
make watch
```

### Seeding data

```bash
make seeding
```

## Cấu trúc thư mục

```
|__ env.example.yml
|__ env.yml
|__ server.go
|__ bin
|__ helpers
|__ models
    |__ database.go
    |__ product.go
    |__ product_variant.go
|__ modules
    |__ product
        |__ grpc
        |__ http
        |__ graphql
            |__ product_graphql.go
            |__ product_type.go
        |__ repository
            |__ product_repository.go
            |__ product_repository_test.go
        |__ usecase
            |__ product_usercase.go
            |__ product_usercase_test.go
        |__ repository.go
        |__ usecase.go
    |__ product_variant
        |__ graphql
            |__ product_variant_graphql.go
            |__ product_variant_type.go
        |__ repository
            |__ product_variant_repository.go
        |__ usecase
            |__ product_variant_usercase.go
        |__ repository.go
        |__ usecase.go
|__ public
    |__ graphql
```
## Connect to database
Sử dụng 1 phần mềm kết nối đến database bất kì với credentials sau:
- host: localhost
- port: 54322 (vì trong docker-compose.yml đang map port 5432 từ docker container ra 54322 ở máy)
- db name: online_store
- user: postgres
- password: secret
