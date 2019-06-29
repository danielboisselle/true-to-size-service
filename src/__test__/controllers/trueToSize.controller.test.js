const {
  expect,
} = require('chai');
const {
  TrueToSizeModel,
} = require('../../models');
const { TrueToSizeController } = require('../../controllers');
const { NotFoundError, ValidationError } = require('../../utils/error');

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

    it('should throw error if model does not exsist', async () => {
      try {
        const inst = await TrueToSizeModel.create();
        const { id } = inst;
        await inst.destroy();

        await TrueToSizeController.addEntry(id, 5);
      } catch (e) {
        expect(e).to.be.an.instanceof(NotFoundError);
      }
    });

    it('should throw error if entry is not between 1-5', async () => {
      const inst = await TrueToSizeModel.create();

      try {
        await TrueToSizeController.addEntry(inst.id, 6);
      } catch (e) {
        expect(e).to.be.an.instanceof(ValidationError);
      }
    });

    it('should average numbers correctly', async () => {
      const entries = [5, 5, 5, 5, 5];
      const newEntry = 1;
      const average = [5, 5, 5, 5, 5].reduce((a, b) => a + b) / entries.length;
      const newAverage = 4.3333333333333;

      const inst = await TrueToSizeModel.create({
        entries,
        average,
      });

      const updatedInstance = await TrueToSizeController.addEntry(inst.id, newEntry);

      expect(updatedInstance.average).equal(newAverage);
    });

    it('should add to instance\'s \'entriesSum\' property when adding entries', async () => {
      const inst = await TrueToSizeModel.create();
      const { id } = inst;

      await TrueToSizeController.addEntry(id, 5);
      await TrueToSizeController.addEntry(id, 5);
      const updatedInst = await TrueToSizeController.addEntry(id, 5);

      expect(updatedInst.entriesSum).equal(15);
    });

    it('should decrement instance\'s \'entriesSum\' property when removing/deleting entries', async () => {
      const inst = await TrueToSizeModel.create();
      const { id } = inst;

      await TrueToSizeController.addEntry(id, 5);
      const updatedInst = await TrueToSizeController.removeEntry(id, 5);

      expect(updatedInst.entriesSum).equal(0);
    });
  });
});
