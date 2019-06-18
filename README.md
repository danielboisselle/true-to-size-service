## true-to-size-service

First - ensure you have postgres databases on your local-machine named 'trueToSize' (Development) and 'trueToSize_test' (Test) for each environment. 

If you do not have postgres installed on your machine: see - [Setting up a PostgreSQL environment](https://www.tutorialspoint.com/postgresql/postgresql_environment.htm)
If you're unfamiliar creating a new database: see [Creating a database in PostgreSQL](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm)


install the necessary project package dependencies
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
### Available APIs
- POST   /trueToSize/{id}/entry - Creates a new true to size entry at 'id'
  - example request.body = { entry: 5 }
- GET    /trueToSize/{id} - Retrive a true to size at 'id'
- DELETE /trueToSize/{id} - Deletes a true to size at 'id'
- GET    /trueToSize - Retrives all true to sizes
- POST   /trueToSize - Creates a new true to size
  
### Future Features/Updates
- optimize average entries calculation by storing sum of entries on TrueToSize entity
- extend 'POST /trueToSize/{id}/entry' to take multiple entries in request body
