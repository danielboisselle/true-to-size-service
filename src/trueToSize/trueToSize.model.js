module.exports = (sequelize, type) => sequelize.define('trueToSize', {
  id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  entries: type.ARRAY(type.INTEGER),
  average: type.INTEGER,
});
