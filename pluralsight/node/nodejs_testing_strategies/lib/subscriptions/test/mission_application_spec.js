var assert = require('assert'),
  MembershipApplication = require('../membership_application');

describe('Applying for a mission', function() {
  describe('Application successful if...', function() {
    before(function() {
      validApp = new MembershipApplication({
        first: 'John',
        last: 'Doe',
        email: 'johndoe@test.com',
        age: 33,
        height: 70,
        weight: 200
      });
    });

    it('all validators successful');
    it('first and last name are provided', function() {
      assert(validApp.isValid(), 'invalid app!');
    });
    it('email is 4 or more chars and contains @');
    it('age is between 15 and 100');
    it('height is between 60 and 75 inches');
    it('weight is between 100 and 300');
  });
});
