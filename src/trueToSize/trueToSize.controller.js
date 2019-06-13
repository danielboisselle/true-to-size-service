module.exports = model => ({
  getAll() {
    return model.findAll().then(res => res);
  },
  getOne(id) {
    return model.findByPk(id);
  },
  createOne() {
    return model.create();
  },
  deleteOne(id) {
    return model.findByPk(id)
      .then(inst => inst.destroy());
  },
  addEntry(id, entry) {
    return model.findByPk(id)
      .then((inst) => {
        const updatedEntries = [...inst.entries, entry];

        return inst.update({
          entries: updatedEntries,
          average: (updatedEntries.reduce((a, b) => a + b) / updatedEntries.length),
        });
      });
  },
});
