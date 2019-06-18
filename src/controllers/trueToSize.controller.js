const { NotFoundError, ValidationError } = require('../utils/error');
const averageEntries = require('../utils/averageEntries');

module.exports = model => ({
  getAll() {
    return model.findAll().then(res => res);
  },
  getOne(id) {
    return model.findByPk(id)
      .then((inst) => {
        if (!inst) {
          throw new NotFoundError();
        }

        return inst;
      });
  },
  createOne() {
    return model.create();
  },
  deleteOne(id) {
    return model.findByPk(id)
      .then(inst => inst.destroy());
  },
  addEntry(id, entry) {
    const validEntries = [1, 2, 3, 4, 5];

    if (!validEntries.includes(entry)) {
      throw new ValidationError(`Possible valid entries ${validEntries}`);
    }

    return model.findByPk(id)
      .then((inst) => {
        if (!inst) {
          throw new NotFoundError();
        }

        const updatedEntries = [...inst.entries, entry];

        return inst.update({
          entries: updatedEntries,
          average: averageEntries(updatedEntries),
        });
      });
  },
});
