const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  suite('Routing tests', () => {

    test('Convert 10L (input)', done => {
      chai.request(server)
        .get('/api/convert')
        .query({input : '10L'})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, 10)
        assert.equal(res.body.initUnit, 'L')
        assert.equal(res.body.returnNum, 2.64172)
        assert.equal(res.body.returnUnit, 'gal')
        done()
      })
    })
    test('Convert 32g (input)', done => {
      chai.request(server)
        .get('/api/convert')
        .query({input : '32g'})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.text, 'invalid unit')
        done()
      })
    })
    test('Convert 3/7.2/4kg (input)', done => {
      chai.request(server)
        .get('/api/convert')
        .query({input : '3/7.2/4kg'})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.text, 'invalid number')
        done()
      })
    })
    test('Convert 3/7.2/4kilomegagram (input)', done => {
      chai.request(server)
        .get('/api/convert')
        .query({input : '3/7.2/4kilomegagram'})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.text, 'invalid number and unit')
        done()
      })
    })

    test('Convert kg (input)', done => {
      chai.request(server)
        .get('/api/convert')
        .query({input : 'kg'})
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, 1)
        assert.equal(res.body.initUnit, 'kg')
        assert.equal(res.body.returnNum, 2.20462)
        assert.equal(res.body.returnUnit, 'lbs')
        done()
      })
    })
  })
  
  
});
