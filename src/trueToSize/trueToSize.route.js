const express = require('express');

const router = express.Router();

const { TrueToSizeModel } = require('../../sequelize');
const TrueToSizeController = require('./trueToSize.controller')(TrueToSizeModel);

// POST a TrueToSize entry
router.post('/:id/entry', async (req, res, next) => {
  res.json({});
});

// GET TrueToSize by Id
router.get('/:id', async (req, res, next) => {
  res.json({});
});

// DELETE a TrueToSize by Id
router.delete('/:id', async (req, res, next) => {
  res.json({});
});

// GET all TrueToSize entities
router.get('/', async (req, res, next) => {
  try {
    const allInstances = await TrueToSizeController.getAll();
    res.status(200).json(allInstances);
  } catch (e) {
    next(e);
  }
});

// POST a TrueToSize entity
router.post('/', async (req, res, next) => {
  res.json({});
});

router.use((err, req, res) => {
  if (err.message) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
  }

  res.status(500).send('something went wrong');
});

module.exports = router;
