var {multiply, subtract} = require('./multiply.js');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

describe('multiply function', () => {
  it('should accept two numbers and retuen the multplication', () => {
    var result = multiply(2, 3);

    expect(result).to.equal(6);
    assert.equal(result, 6);
    result.should.equal(6);
  });
});

describe('subtract function', () => {
  it('should accept two numbers and retuen the subtraction', () => {
    var result = subtract(2, 3);

    expect(result).to.equal(-1);
    assert.equal(result, -1);
    result.should.equal(-1);
  });
});