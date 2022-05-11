process.env.NODE_ENV = 'test';
const chai = require("chai");
const expect= chai.expect;
const request=require('supertest');

const app = require('../server.js');
const connectDB=require('../dataBase.js');

describe('POST login', () => {
    //  before((done) => { 
    //      connectDB()
    //         .then(() => done()) 
    //         .catch((err) => done(err));
    //  })

    it('Login Positive Test Case', (done) => {
        request(app).post('/')
            .send({ email: 'abcd@gmail.com', password: "qwerty" })
            .then((res) => {
                // const body = res.body; 
                expect(res.statusCode).toEqual(201)
                done();
            })
            .catch((err) => {console.log(err); done(err)});
});

    it('Login Negative Test Case', (done) => { 
        request(app).post('/')
            .send({ email: 'parth.ajmera@iiitb.org', password: "12346" })
            .then((res) => {
                const body = res.body; 
                expect (body).to.contain.property('message'); 
                done();
            })
            .catch((err) => done(err));
});
})


// "migrate": "npx sequelize-cli db:migrate",
// "migrate:reset": "npx sequelize-cli db:migrate:undo:all && npm run migrate",
// "test1": "cross-env NODE_ENV=test jest --testTimeout=10000",
// "pretest": "cross-env NODE_ENV=test npm run migrate:reset"