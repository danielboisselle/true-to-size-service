const {
  TrueToSizeModel,
} = require('../models');
const TrueToSizeController = require('./trueToSize.controller')(TrueToSizeModel);

module.exports = {
  TrueToSizeController,
};
