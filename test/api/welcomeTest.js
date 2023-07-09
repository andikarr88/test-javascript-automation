const assert = require('chai').assert;
const app = require('../../assert')

//Asserting
//cara assert menggunakan chai
describe('Welcome test', function(){
    it('app should returs welcome message', function(){
        assert.equal(app(),"welcome QA")
    })
})