## Description

NestJS+TypeORM

## Database

```
type: mariadb(如果是mysql，则需要改为mysql)
host: 127.0.0.1
port: 6379
username: root
password: 123456.!
database: test
Tips：
1、运行前需要新建数据库，不需要建数据库表，运行后会自动映射生成数据库表
2、如果需要修改以上配置，打开app.module.ts代码进行修改
```

## Installation

```bash
$ yarn --registry https://registry.npm.taobao.org && yarn build
```

## Running the app

```bash

# watch mode
$ yarn start:dev

```

## Document

```
运行成功后访问 http://127.0.0.1:3000/api 即可访问Swagger文档
```