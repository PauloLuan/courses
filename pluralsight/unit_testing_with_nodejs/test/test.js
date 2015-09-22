'use strict';

var chai = require('chai'),
  expect = chai.expect;

chai.should();

describe('init describe', function() {
  it('should pass', function() {
    expect(true).to.be.true;
    expect(1).to.not.be.true;
  });
});
