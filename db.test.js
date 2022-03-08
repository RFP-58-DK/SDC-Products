const app = require('./app.js');
const supertest = require('supertest');
const request = supertest(app);

it('Testing to see if Jest works', () => {
  expect(1).toBe(1)
});

app.get('/product_information', async (req, res) => {
  res.json({message: 'pass!'})
});

it('gets the product_information endpoint', async done => {
  const response = await request.get('/product_information')
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass')
  done()
})

