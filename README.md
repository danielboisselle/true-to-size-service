## true-to-size-service

First - ensure you have postgres databases on your local-machine named 'trueToSize' (Development) and 'trueToSize_test' (Test) for each environment. 

If you do not have postgres installed on your machine: see - [Setting up a PostgreSQL environment](https://www.tutorialspoint.com/postgresql/postgresql_environment.htm)
If you're unfamiliar creating a new database: see [Creating a database in PostgreSQL](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm)


install the necessary project package dependinces
```sh
$ npm install
```
To deploy the server locally run:
```sh
$ npm run start
```
To test the app run:
```sh
$ npm run start
```
### Avaliable APIs
- POST /trueToSize/{id}/entry 
  - example request body: { entry: 5 }
- GET /trueToSize/{id}
- DELETE /trueToSize/{id}
- GET /trueToSize
- POST /trueToSize
  
### Future Features
- optimize average entries calculation by storing sum of entries on TrueToSize entity
- extend 'POST /trueToSize/{id}/entry' to take multiple entries in request body
