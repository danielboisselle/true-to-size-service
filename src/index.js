const express = require('express');

const router = express.Router();

const TrueToSizeRouter = require('./routes');

// POST a TrueToSize entry
router.post('/:id/entry', TrueToSizeRouter.PostTrueToSizeEntry);

// GET TrueToSize by Id
router.get('/:id', TrueToSizeRouter.GetTrueToSizeById);

// DELETE a TrueToSize by Id
router.delete('/:id', TrueToSizeRouter.DeleteTrueToSizeById);

// GET all TrueToSize entities
router.get('/', TrueToSizeRouter.GetAllTrueToSize);

// POST a TrueToSize entity
router.post('/', TrueToSizeRouter.PostATrueToSize);

router.use(TrueToSizeRouter.ErrorHandler);

module.exports = router;
