'use strict';

var chai = require('chai'),
  sinon = require('sinon'),
  expect = chai.expect,
  Employee = require('../lib/Employee'),
  Company = require('../lib/Company');

chai.should();

describe('Company tests', function() {

  var employee1, employee2, employee3, company;

  beforeEach(function() {
    employee1 = new Employee(1, 'Jonh Doe', 2350);
    employee2 = new Employee(2, 'Mister Bean', 1350);
    employee3 = new Employee(3, 'Marty Mcfly', 5350);

    company = new Company(employee1, employee2, employee3);
  });

  it('should create a company and some employees', function() {
    expect(employee1).not.to.be.null;
    expect(employee1).to.have.property('_name');
    expect(company).not.to.be.null;
    company.should.have.property('_employees');
  });

  it('should do the wrong way of spy a function', function() {
    var called = false;

    function callback() {
      called = true;
    }

    company.addEmployee(employee1, callback);
    called.should.be.true;
  });

  it('should do the right way to spy a function', function() {
    var spy = sinon.spy();
    company.addEmployee(employee1, spy);
    spy.called.should.be.true;
  });

  it('should call a fake callback and show a message on the console', function() {
    function showMessageOnConsole() {
      console.log('You can process something inside a spy! This function was called when spy is executed');
    };

    var spy = sinon.spy(showMessageOnConsole);
    company.addEmployee(employee1, spy);
    spy.called.should.be.true;
  });

});
