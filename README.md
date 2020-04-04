# Blog Application

A blog application created with Node.js, Express.js, PostgreSQL & Sequelize ORM

Node modules used
  - Express.js
  - Sequelize 
  - pg-hstore
  - pg
  - Body-Parser

Node modules used for testing
  - Jest.js
  - SuperTest

### Running application

Setting up Database
This repo includes Postgresql backup file just import them in your pgAdmin
Few details about Postgresql backup file if required during using this file
DB name: blogdb
Username: satish
Password: 4321


If any issue occur go with this step

create 1st table: blogs
Column & Datatype
id -> serial (PK)
title -> text
blog -> Json
thumbnail -> text
createdAt -> Date
updatedAt -> Date

create 2nd table: comments
Column & Datatype
id -> serial (Pk)
comment -> text
blogid -> Json (FK -> blogs.id(PK))
createdAt -> Date
updatedAt -> Date

Now make required changes in ```sh blog-node/Backend/config/database.js  ```

Database setup done!!

Moving on backend

```sh
$ cd blog-node/Backend
$ npm install
```

For production environments...

```sh
$ npm run start
```

For development environments...

```sh
$ npm run dev
```
Now
```sh
$ cd ../Frontend
```
Open index.html file with your favorite browser
Done!!

### Running Test

```sh
$ cd Triangle-checker/Backend/
$ jest
```
