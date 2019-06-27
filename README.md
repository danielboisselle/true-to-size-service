## true-to-size-service

### Service context
All shoes are not entirely fitting in comparison to other brands and silhouettes. (e.g., chuck taylors run a size big, therefore, if you are typically a size 9, you would buy a size 8). In other words, shoes are not always “true-to-size”. True-to-size refers to whether or not a shoe fits as expected for a given size. True shoe sizes are measured using the Brannock device, the number shown on that device next to your toe is your true shoe size.

**OBJECTIVE**: Let users know how the shoe fits based on data collected through crowdsourcing. The service accepts new true-to-size data through the Hypertext Transfer Protocol (HTTP) and store this data in a relational database, Postgres. Additionally, this service returns a shoe’s TrueToSizeCalculation, defined below, through an HTTP request. True to size entries range between 1 and 5, inclusive, where 1: really small, 2: small, 3: true to size, 4: big and 5: really big.

> TrueToSizeCalculation = average of the true to size entries for a given shoe

Shoe: Chuck Taylor  

True to size data: 1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3  

True to size calculation: 2.5714285714286

>  If we add another data point, 2, to the collected data, our calculation should reflect this change.

Shoe: Chuck Taylor  

True to size data: 1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3, 2  

True to size calculation: 2.5333333333333

### Project Setup

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
- POST   /trueToSizes/{id}/entry - Creates a new true to size entry at 'id'
  - ex. Request.body = { entry: 5 }

- DELETE  /trueToSizes/{id}/entry - Deletes an entry at 'id'
  - ex. Request.body = { entry: 5 }

- GET    /trueToSizes/{id} - Retrive a true to size at 'id'
- DELETE /trueToSizes/{id} - Deletes a true to size at 'id'
- GET    /trueToSizes - Retrives all true to sizes
- POST   /trueToSizes - Creates a new true to size
  
### Future Features/Updates
- optimize average entries calculation by storing sum of entries on TrueToSize entity
- extend 'POST /trueToSizes/{id}/entry' to take multiple entries in request body
