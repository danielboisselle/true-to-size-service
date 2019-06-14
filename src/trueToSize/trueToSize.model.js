module.exports = (sequelize, type) => sequelize.define('trueToSize', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  entries: {
    type: type.ARRAY(type.INTEGER),
    defaultValue: [],
  },
  average: {
    type: type.FLOAT,
    defaultValue: 0,
  },
});
