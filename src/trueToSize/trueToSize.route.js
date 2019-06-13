const express = require('express');

const router = express.Router();

const { TrueToSizeModel } = require('../../sequelize');
const TrueToSizeController = require('./trueToSize.controller')(TrueToSizeModel);

// POST a TrueToSize entry
router.post('/:id/entry', async (req, res, next) => {
  const {
    params,
    body,
  } = req;

  const {
    id,
  } = params;

  const {
    entry,
  } = body;

  try {
    const inst = await TrueToSizeController.addEntry(id, entry);
    res.status(200).json(inst);
  } catch (e) {
    next(e);
  }
});

// GET TrueToSize by Id
router.get('/:id', async (req, res, next) => {
  const {
    params,
  } = req;

  const {
    id,
  } = params;

  try {
    const inst = await TrueToSizeController.getOne(id);
    res.status(200).json(inst);
  } catch (e) {
    next(e);
  }
});

// DELETE a TrueToSize by Id
router.delete('/:id', async (req, res, next) => {
  const {
    params,
  } = req;

  const {
    id,
  } = params;

  try {
    await TrueToSizeController.deleteOne(id);
    res.status(200).json({ status: 'successful' });
  } catch (e) {
    next(e);
  }
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
  try {
    const inst = await TrueToSizeController.createOne();
    res.status(200).json(inst);
  } catch (e) {
    next(e);
  }
});

router.use((err, req, res) => {
  if (err.message) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
  }

  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = router;
