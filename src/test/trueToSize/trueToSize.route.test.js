const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../index');

describe('TrueToSize Router', () => {
  it('GET /trueToSize', (done) => {
    chai.request(app)
      .get('/trueToSize')
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });
});
