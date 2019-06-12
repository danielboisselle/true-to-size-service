const Sequelize = require('sequelize');

let DB_NAME = process.env.DB_NAME || 'trueToSize_dev';
const DB_USERNAME = process.env.DB_USERNAME || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';

const HOST = process.env.DB_HOST || 'localhost';

const environment = process.env.NODE_ENV;

if (environment === 'test') {
  DB_NAME = 'trueToSize_test';
}

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: HOST,
  dialect: 'postgres',
});

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });

const TrueToSizeModel = require('./src/trueToSize/trueToSize.model')(sequelize, Sequelize);

module.exports = {
  TrueToSizeModel,
};
