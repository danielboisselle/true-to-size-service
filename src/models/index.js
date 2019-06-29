const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const TrueToSizeModel = require('./trueToSize.model')(sequelize, Sequelize);

module.exports = {
  TrueToSizeModel,
};
