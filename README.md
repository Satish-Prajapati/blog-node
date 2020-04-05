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

##### Setting up Database:

This repo includes Postgresql backup file import them in your pgAdmin. Few details about Postgresql backup file if required during using this file
- DB name: blogdb
- Username: satish
- Password: 4321


###### If any issue occur create DB & Table manually

Table name : blogs

![](Images/blog-tabel.png)

Table name : comments

![](Images/comment-tabel.png)

Now link blogid(comments) with id(blogs)

![](Images/relationship.png)

Now to make required changes in ```sh blog-node/Backend/config/database.js  ```

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
