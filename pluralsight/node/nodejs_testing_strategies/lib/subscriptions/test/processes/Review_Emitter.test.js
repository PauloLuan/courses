var assert = require('assert'),
  ReviewProcess = require('../../processes/Review_Emitter.js'),
  MembershipApplication = require('../../models/membership_application.js');

describe('The Review Process', function() {
  it('Receiving a valid  application', function() {
    var validApp, decision;

    before(function(done) {
      validApp = new MembershipApplication({
        first: 'John',
        last: 'Doe',
        email: 'johndoe@test.com',
        age: 33,
        height: 70,
        weight: 200
      });

      var review = new ReviewProcess();

      review.processApplication(validApp, function(err, result) {
        decision = result;
        done();
      });
    });

    it('returns success', function() {
      assert(decision.success, decision.message);
    });

  });
});
