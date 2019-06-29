const Sequelize = require('sequelize');

let DB_NAME = process.env.DB_NAME || 'trueToSize';
const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';

const environment = process.env.NODE_ENV;

if (environment === 'test') {
  DB_NAME = 'trueToSize_test';
}

const config = require('./db.config')[environment];

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, config);

sequelize.sync({ })
  .then(() => {
    // Database & tables created
  });

module.exports = sequelize;
