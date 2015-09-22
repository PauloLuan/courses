'use strict';

var chai = require('chai'),
  expect = chai.expect;

chai.should();

describe('Company tests', function() {
  it('should create a company and some employees', function() {
    var Employee = require('../lib/Employee');
    var Company = require('../lib/Company');

    var employee1 = new Employee(1, 'Jonh Doe', 2350);
    employee1.should.not.be.null;
    expect(employee1).to.have.property('_name');

    var employee2 = new Employee(2, 'Mister Bean', 1350);
    var employee3 = new Employee(3, 'Marty Mcfly', 5350);

    var company = new Company(employee1, employee2, employee3);
    company.should.not.be.null;

    company.should.have.property('_employees');
  });

});
