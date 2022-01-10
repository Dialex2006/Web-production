const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API is working!'
      }, done);
  });
});

describe('GET /api/v1/emojis', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});



describe('Custom API test 1', function () {
  it('Testing the endpoint "/api/v1/task/random" ', function (done) {
   request(app)
     .get('/api/v1/task/random')
     .set('Accept', 'application/json')
  
     // verification of the return values
     .expect('Content-Type', /json/)  
     .expect(200, done) // integration
   });
 });



describe('Custom API test 2', function() {
  it('Checking the content of task generation', () =>
   request(app)
    .get('/api/v1/task/random')
    .expect(200)
    .expect(function containsString(res) {
     if (res.text.indexOf('random_task') == -1)
      throw new Error('Wrong content');
    })
  );
 });



describe('Custom API test 3', function() {
  it('Checking number of words generated (must be 3 words), counting \' \' symbols' , () =>
   request(app)
    .get('/api/v1/task/random')
    .expect(200)
    .expect(function containsString(res) {
      var task_name = JSON.parse(res.text).random_task;
      if (task_name.split(" ").length - 1 != 2) {
        throw new Error('Wrong amount of tasks generated');
     }
    })
  );
 });
