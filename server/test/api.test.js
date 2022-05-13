process.env.NODE_ENV = 'test';
// const { expect } = require('chai');
const request=require('supertest');
const Server = require('http');


const app = require('../server.js').app;
const connectDB=require('../dataBase.js').Users;



describe("login Testing", () => {
    test("Sign up successful", async () => {
    const response = await request(app)
      .post("/APIs/signup/")
      .send({
        signemail: "abcd@gmail.com",
        firstname: "madhav",
        lastname: "reddy",
        signpass: "qwerty"
      });
      expect(response.headers['location']).toBe('/');
    });
    test("Login successful", async () => {
    const response = await request(app)
      .post("/APIs/login/")
      .send({
        email: "abcd@gmail.com",
        password: "qwerty"
      });
      expect(response.headers['location']).toBe('./../../main.html');
    });

    test("Login unsuccessful", async () => {
        const response = await request(app)
          .post("/APIs/login/")
          .send({
            email: "abcd@gmail.com",
            password: "qwert"
          });
          expect(response.statusCode).toBe(501);
        });

    test("Sign up unsuccessful", async () => {
        const response = await request(app)
          .post("/APIs/signup/")
          .send({
            signemail: "abcd@gmail.com",
            firstname: "madhav",
            lastname: "reddy",
            signpass: "qwerty"
          });
          expect(response.statusCode).toBe(400);
        });

    test("Forget password otp sent", async () => {
        const response = await request(app)
          .post("/APIs/forget/")
          .send({
            forgetemail: "abcd@gmail.com",
          });
          expect(response.headers['location']).toBe('../../passwordModifications/conformation.html');
        });

    test("Forget password email invalid", async () => {
        const response = await request(app)
          .post("/APIs/forget/")
          .send({
            forgetemail: "ab@gmail.com",
          });
          expect(response.statusCode).toBe(404);
        });

  });
  





  // // "migrate": "npx sequelize-cli db:migrate",
// // "migrate:reset": "npx sequelize-cli db:migrate:undo:all && npm run migrate",
// // "test1": "cross-env NODE_ENV=test jest --testTimeout=10000",
// // "pretest": "cross-env NODE_ENV=test npm run migrate:reset"
// "test": "mocha 'test/**/*.js' --recursive"
