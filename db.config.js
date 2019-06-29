const host = process.env.DB_HOST || 'localhost';
const dialect = 'postgres';

module.exports = {
  development: {
    host,
    dialect,
  },
  test: {
    host,
    dialect,
    logging: false,
  },
};
