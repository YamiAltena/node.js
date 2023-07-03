const request = require("supertest")("https://reqres.in/api")
const expect = require("chai").expect;

describe("Register User", function() {
    it ("Success Register User",  async function() {
        const response = await request
        .post("/register")
        .send({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        });
        expect(response.status).to.eql(200)
    })
})

