var _ = require('lodash');

var MembershipApplication = function(args) {
  _.extend(this, args);
}

MembershipApplication.prototype.isNameValid = function() {
  return this.first && this.last;
};
MembershipApplication.prototype.isEmailValid = function() {};
MembershipApplication.prototype.isAgeValid = function() {};
MembershipApplication.prototype.isHeightValid = function() {};
MembershipApplication.prototype.isWeightValid = function() {};
MembershipApplication.prototype.isValid = function() {
  return this.isNameValid();
};

module.exports = MembershipApplication;
