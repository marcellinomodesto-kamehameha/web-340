"use strict";

const http = require('http');
const server = require('../src/server');

beforeAll((done) => {
  server.listen(3000, done);
});

afterAll((done) => {
  server.close(done);
});

beforeEach((done) => {
  const req = http.request({
    hostname: "localhost",
    port: 3000,
    path: "/create?class=Warrior&gender=Male&fact=Strong",
    method: "POST"
  }, () => {
    done();
  });

  req.end();
});

describe("Fantasy Character API", () => {

  test("POST /create should create a character", (done) => {
    const req = http.request({
      hostname: "localhost",
      port: 3000,
      path: "/create?class=Warrior&gender=Male&fact=Strong",
      method: "POST"
    }, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });

    req.end();
  });

  test("POST /confirm should confirm a character", (done) => {
    const req = http.request({
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    }, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });

    req.end();
  });

  test("GET /character should return created character", (done) => {
    http.get("http://localhost:3000/character", (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

});