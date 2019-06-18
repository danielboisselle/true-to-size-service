const {
  expect,
} = require('chai');
const averageEntries = require('../../utils/averageEntries');

describe('averageEntries()', () => {
  before(async () => {

  });

  it('should return expected averages', async () => {
    expect(averageEntries([1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3])).equal(2.5714285714286);
    expect(averageEntries([1, 2, 2, 3, 2, 3, 2, 2, 3, 4, 2, 5, 2, 3, 2])).equal(2.5333333333333);
  });
});
