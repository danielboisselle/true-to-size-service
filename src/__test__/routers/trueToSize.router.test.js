const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../index');

const {
  TrueToSizeModel,
} = require('../../models');

describe('TrueToSize Router', () => {
  let instToDelete;
  let instToManipulate;
  let savedUuid;

  before(async () => {
    await TrueToSizeModel.sync({ force: true });
    instToDelete = await TrueToSizeModel.create();
    instToManipulate = await TrueToSizeModel.create();

    const inst = await TrueToSizeModel.create();
    savedUuid = inst.id;
    await inst.destroy();
  });

  it('POST /trueToSizes/:id/entry should add a new entry to the entity', (done) => {
    const { id } = instToManipulate;
    const entry = 5;

    chai.request(app)
      .post(`/trueToSizes/${id}/entry`)
      .send({ entry })
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.average).equal(entry);
        done();
      });
  });

  it('DELETE /trueToSizes/:id/entry should delete an entry to the entity', (done) => {
    // Delete the entry from POST test
    const { id } = instToManipulate;
    const entry = 5;

    chai.request(app)
      .delete(`/trueToSizes/${id}/entry`)
      .send({ entry })
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('POST /trueToSizes/:id/entry should respond 400 invalid entry', (done) => {
    const { id } = instToManipulate;
    const entry = 6;

    chai.request(app)
      .post(`/trueToSizes/${id}/entry`)
      .send({ entry })
      .end(async (err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it('GET /trueToSizes/:id should get a single trueToSizes entity', (done) => {
    const { id } = instToManipulate;

    chai.request(app)
      .get(`/trueToSizes/${id}`)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.id).equal(id);
        done();
      });
  });

  it('GET /trueToSizes/:id should respond 404 not found for nonexisting entity', (done) => {
    chai.request(app)
      .get(`/trueToSizes/${savedUuid}`)
      .end(async (err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('DELETE /trueToSizes/:id should delete the entity by id', (done) => {
    const { id } = instToDelete;

    chai.request(app)
      .delete(`/trueToSizes/${id}`)
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        const inst = await TrueToSizeModel.findByPk(id);
        expect(inst).equal(null);
        done();
      });
  });

  it('GET /trueToSizes should get all trueToSizes entities', (done) => {
    chai.request(app)
      .get('/trueToSizes')
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('POST /trueToSizes should create a new trueToSizes entity', (done) => {
    chai.request(app)
      .post('/trueToSizes')
      .end(async (err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.average).to.be.a('number');
        expect(res.body.entries).to.be.a('array');
        done();
      });
  });
});
