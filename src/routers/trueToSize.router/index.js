const express = require('express');

const router = express.Router();

const {
  PostTrueToSizeEntry,
  GetTrueToSizeById,
  DeleteTrueToSizeById,
  GetAllTrueToSize,
  PostATrueToSize,
  ErrorHandler,
} = require('./middleware');

// POST a TrueToSize entry
router.post('/:id/entry', PostTrueToSizeEntry);

// GET TrueToSize by Id
router.get('/:id', GetTrueToSizeById);

// DELETE a TrueToSize by Id
router.delete('/:id', DeleteTrueToSizeById);

// GET all TrueToSize entities
router.get('/', GetAllTrueToSize);

// POST a TrueToSize entity
router.post('/', PostATrueToSize);

router.use(ErrorHandler);

module.exports = router;
