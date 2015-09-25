var _ = require('lodash'),
  moment = require('moment');

var MembershipApplication = function(args) {
  args || (args = {});
  _.extend(this, args);
  this.validUntil = args.validUntil ? moment(new Date(args.validUntil)) : moment().add(10, 'days');
};

MembershipApplication.prototype.nameIsValid = function() {
  return this.first && this.last;
};

MembershipApplication.prototype.emailIsValid = function() {
  return this.email && this.email.length > 3 && this.email.indexOf('@') > -1;
};

MembershipApplication.prototype.ageIsValid = function() {
  return this.age && this.age > 15 && this.age < 100;
};

MembershipApplication.prototype.heightIsValid = function() {
  return this.height && this.height > 60 && this.height < 75;
};

MembershipApplication.prototype.weightIsValid = function() {
  return this.weight && this.weight > 100 && this.weight < 300;
};

MembershipApplication.prototype.expired = function() {
  return this.validUntil.isBefore(moment());
};

MembershipApplication.prototype.isValid = function() {
  return this.nameIsValid() &&
    this.emailIsValid() &&
    this.ageIsValid() &&
    this.heightIsValid() &&
    this.weightIsValid() &&
    !this.expired();
};

module.exports = MembershipApplication;
