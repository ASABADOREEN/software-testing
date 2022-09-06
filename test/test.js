const assert = require('chai').assert
const multiply = require('../multiply');

describe('checks multiplication', () => {
    it('checks if result is 1', () => {
        assert.equal(multiply(1,1), 1);
    });
    it('checks if result is 4', () => {
        assert.equal(multiply(2,2), 4);
    });
    it('checks if result is 9', ()=>{
        assert.equal(multiply(3,3), 9);
    });
    it('checks if result is 16', ()=>{
        assert.equal(multiply(4,4), 16);
    });
    it('checks if result is 23*45', ()=>{
        assert.equal(multiply(23,45), 23*45);
    });
});
