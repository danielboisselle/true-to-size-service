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

        const {
          entries,
          entriesSum,
        } = inst;

        const updatedEntries = [...entries, entry];

        const updatedEntriesSum = entry + entriesSum;

        return inst.update({
          entries: updatedEntries,
          average: averageEntries(updatedEntries),
          entriesSum: updatedEntriesSum,
        });
      });
  },
  removeEntry(id, entry) {
    const validEntries = [1, 2, 3, 4, 5];

    if (!validEntries.includes(entry)) {
      throw new ValidationError(`Possible valid entries ${validEntries}`);
    }

    return model.findByPk(id)
      .then((inst) => {
        if (!inst) {
          throw new NotFoundError();
        }

        const {
          entries,
          entriesSum,
        } = inst;

        // Removing an entry that has not been added previously
        if (!entries.includes(entry)) {
          return inst;
        }

        const removeIndex = entries.indexOf(entry);

        const updatedEntries = [...entries].splice(removeIndex, 1);

        const updatedEntriesSum = entriesSum - entry;

        return inst.update({
          entries: updatedEntries,
          average: averageEntries(updatedEntries),
          entriesSum: updatedEntriesSum,
        });
      });
  },
});
