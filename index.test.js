const app = require('./index.js')
const request = require('supertest')

describe('index.js', () => {
  it('正しい引数', () => {
    request(app).get('/api/test')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      })
  })
  // it('誤った引数', () => {
  //   request(app).get('/api/test')
  //     .then((response) => {
  //       expect(response.statusCode).toBe(404);
  //     })
  // })
})