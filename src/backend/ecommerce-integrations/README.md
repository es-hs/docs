# Setup Project

## Install dependencies

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
- To fill the `DB_ONLINE_STORE_HOST` variable, use the commands below:

```bash
docker network inspect es-hs
```

Try to find the IP Address of container `postgres_online_store` and there is it (don't forget to running online-store-api server)
![online store database host](https://s3-ap-southeast-1.amazonaws.com/gemtickets/production/dashboard/b06de924-a8ce-47fe-850f-7a16fb9002a1.png)

## Project structure

Referring from these repositories

- https://github.com/bxcodec/go-clean-arch
- https://github.com/golang-standards/project-layout

## For Woocommerce

### Run locally

```bash
make woo-watch
```

If you update Dockerfile, rebuild by the command

```bash
make down
make woo-watch
```

### Seeding data for Woocommerce data

```bash
make woo-seeding
```

## For Shopify

### Run locally

```bash
make shopify-watch
```

If you update Dockerfile, rebuild by the command

```bash
make down
make shopify-watch
```

### Seeding data for Shopify data

```bash
make shopify-seeding
```

## Create new module

- Clone from `todo` module

## Connect to database
Sử dụng 1 phần mềm kết nối đến database bất kì với credentials sau:
- host: localhost
- port: 54321 (vì trong docker-compose.yml đang map port 5432 từ docker container ra 54321 ở máy)
- db name: ecommerce_integrations
- user: postgres
- password: secret
