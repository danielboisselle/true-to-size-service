module.exports = (sequelize, type) => sequelize.define('trueToSize', {
  id: {
    type: type.UUID,
    defaultValue: type.UUIDV4,
    primaryKey: true,
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
