const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../index');

const {
  TrueToSizeModel,
} = require('../../../sequelize');

describe('TrueToSize Router', () => {
  let instToDelete;
  let instToManipulate;

  before(async () => {
    await TrueToSizeModel.sync({ force: true });
    instToDelete = await TrueToSizeModel.create();
    instToManipulate = await TrueToSizeModel.create();
  });

  it('POST /trueToSize/:id/entry should add a new entry to the entity', (done) => {
    const { id } = instToManipulate;
    const entry = 5;

    chai.request(app)
      .post(`/trueToSize/${id}/entry`)
      .send({ entry })
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.average).equal(entry);
        done();
      });
  });

  it('GET /trueToSize/:id should get a single trueToSize entity', (done) => {
    const { id } = instToManipulate;

    chai.request(app)
      .get(`/trueToSize/${id}`)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.id).equal(id);
        done();
      });
  });

  it('DELETE /trueToSize/:id should delete the entity by id', (done) => {
    const { id } = instToDelete;

    chai.request(app)
      .delete(`/trueToSize/${id}`)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        const inst = await TrueToSizeModel.findByPk(id);
        expect(inst).equal(null);
        done();
      });
  });

  it('GET /trueToSize should get all trueToSize entities', (done) => {
    chai.request(app)
      .get('/trueToSize')
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('POST /trueToSize should create a new trueToSize entity', (done) => {
    chai.request(app)
      .post('/trueToSize')
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.average).to.be.a('number');
        expect(res.body.entries).to.be.a('array');
        done();
      });
  });
});
