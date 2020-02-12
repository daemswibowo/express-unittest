const request = require('supertest');
const app = require('../../app');

const get = (path) => request(app).get(path).set('Accept', 'application/json');
/* Test the /GET route */
describe('app index route', () => {
  it('it should GET /', (done) => {
    get('/').expect(200)
      .end((err, res) => {
        expect(res.text).toBe(JSON.stringify({
          title: 'helo dimas'
        }));
        done();
      });
  });
});
