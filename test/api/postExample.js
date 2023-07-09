const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": "12345678",
            "username": "andikauser1234",
            "firstName": "andika1",
            "lastname": "1234",
            "email": "andikatest1@yyy.com",
            "password": "test123456",
            "phone": "083806978",
            "userstatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})