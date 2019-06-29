const { TrueToSizeController } = require('../../controllers');

module.exports = {
  PostTrueToSizeEntry: async (req, res, next) => {
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
  },
  DeleteTrueToSizeEntry: async (req, res, next) => {
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
      await TrueToSizeController.removeEntry(id, entry);
      res.status(200).json({ status: 'successful' });
    } catch (e) {
      next(e);
    }
  },
  GetTrueToSizeById: async (req, res, next) => {
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
  },
  DeleteTrueToSizeById: async (req, res, next) => {
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
  },
  GetAllTrueToSize: async (req, res, next) => {
    try {
      const allInstances = await TrueToSizeController.getAll();
      res.status(200).json(allInstances);
    } catch (e) {
      next(e);
    }
  },
  PostATrueToSize: async (req, res, next) => {
    try {
      const inst = await TrueToSizeController.createOne();
      res.status(200).json(inst);
    } catch (e) {
      next(e);
    }
  },
  ErrorHandler: (err, req, res) => {
    if (err.message) {
      const statusCode = err.statusCode || 500;
      res.status(statusCode).send(err);
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
