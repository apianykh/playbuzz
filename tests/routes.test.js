require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server');

describe('POST /collect', () => {
  it('should get 201 response', async () => {
    const response = await request(app)
      .post('/collect')
      .send({
        'page-id': 'page-id',
        'user-id': 'user-id'
      });
      
    expect(response.statusCode).toEqual(201);
  });
});

describe('Check Auth', () => {
  it('should get 401 response', async () => {
    const response = await request(app).get('/page-views');

    expect(response.statusCode).toEqual(401);
  });
});

describe('GET /page-views', () => {
  it('should get an array', async () => {
    const response = await request(app)
      .get('/page-views')
      .set('Authorization', process.env.AUTH_TOKEN);
      
    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /page-views/by-browser', () => {
  it('should get an array', async () => {
    const response = await request(app)
      .get('/page-views/by-browser')
      .set('Authorization', process.env.AUTH_TOKEN);
      
    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /page-views/by-country', () => {
  it('should get an array', async () => {
    const response = await request(app)
      .get('/page-views/by-country')
      .set('Authorization', process.env.AUTH_TOKEN);
      
    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /users-rate', () => {
  it('should get an array', async () => {
  const response = await request(app)
    .get('/users-rate')
    .set('Authorization', process.env.AUTH_TOKEN);
      
    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

afterAll(async done => {
  mongoose.connection.close();
  done();
});