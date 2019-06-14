const host = process.env.DB_HOST || 'localhost';
const dialct = 'postgres';

module.exports = {
  "development": {
    host,
    dialct,
  },
  "test": {
    host,
    dialct,
    logging: false,
  }
}