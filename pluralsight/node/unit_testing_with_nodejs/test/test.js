'use strict';

var chai = require('chai'),
  expect = chai.expect;

chai.should();

describe('init describe', function() {
  it('should pass', function() {
    expect(true).to.be.true;
    expect(1).to.not.be.true;
  });

  xit('should not execute this function because we have an "x" before the it', function() {
    // it works as well either with describe
    expect(true).to.be.true;
  })

  it.skip('other way to do the same as "x" is to put .skip after the it', function() {
    expect(true).to.be.true;
  });

});
