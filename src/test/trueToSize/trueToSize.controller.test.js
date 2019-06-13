const {
  expect,
} = require('chai');
const {
  TrueToSizeModel,
} = require('../../../sequelize');
const TrueToSizeController = require('../../trueToSize/trueToSize.controller')(TrueToSizeModel);

describe('TrueToSizeController', () => {
  before(async () => {
    await TrueToSizeModel.sync({ force: true });
    await TrueToSizeModel.create();
  });

  it('should get a list of TrueToSizes', async () => {
    const list = await TrueToSizeController.getAll();

    expect(list).to.be.an('array');
    expect(list.length).equal(1);
  });

  it('should create a TrueToSize', async () => {
    const inst = await TrueToSizeController.createOne();

    expect(inst).to.be.an('object');
    expect(inst.entries).to.be.an('array');
    expect(inst.average).equal(0);
  });

  it('should get a TrueToSize by id', async () => {
    const instanceCreated = await TrueToSizeModel.create();
    const inst = await TrueToSizeController.getOne(instanceCreated.id);

    expect(inst.id).equal(instanceCreated.id);
  });

  it('should delete a TrueToSize', async () => {
    const instanceCreated = await TrueToSizeModel.create();
    const deleteOneRetuned = await TrueToSizeController.deleteOne(instanceCreated.id);
    const instanceDeleted = await TrueToSizeModel.findByPk(instanceCreated.id);

    expect(deleteOneRetuned).to.be.a('array');
    expect(deleteOneRetuned.length).equal(0);
    expect(instanceDeleted).to.be.a('null');
  });

  describe('TrueSize entries', () => {
    let instanceBefore;
    let instanceUpdated;

    before(async () => {
      instanceBefore = await TrueToSizeModel.create();
    });

    it('should add a new entry to TrueToSize', async () => {
      const ENTRY = 5;
      instanceUpdated = await TrueToSizeController.addEntry(instanceBefore.id, ENTRY);

      expect(instanceUpdated.entries).deep.equal([ENTRY]);
    });

    it('should update properties when entries are added', async () => {
      expect(instanceUpdated.average).equal(5);
    });
  });
});
