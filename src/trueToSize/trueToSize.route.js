const express = require('express');

const router = express.Router();

const { TrueToSizeModel } = require('../../sequelize');
const TrueToSizeController = require('./trueToSize.controller')(TrueToSizeModel);

router.get('/', async (req, res, next) => {
  try {
    const allInstances = await TrueToSizeController.getAll();
    res.status(200).json(allInstances);
  } catch (e) {
    next(e);
  }
});

router.use((err, req, res) => {
  if (err.message) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
  }

  res.status(500).send('something went wrong');
});

module.exports = router;
