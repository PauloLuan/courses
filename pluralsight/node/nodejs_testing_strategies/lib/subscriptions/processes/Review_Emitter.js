var Emitter = require('events').EventEmitter,
  util = require('util'),
  self;

var ReviewProcess = function(args) {
  self = this;

  // event path
  self.on("application-received", self.ensureAppIsValid);
  self.on("validated", self.findNextMission);
  self.on("mission-selected", self.roleIsAvailable);
  self.on("role-available", self.ensureRoleCompatible);
  self.on("role-compatible", self.acceptApplication);
  self.on("invalid", self.denyApplication);
};

ReviewProcess.prototype.ensureAppIsValid = function() {};
ReviewProcess.prototype.findNextMission = function() {};
ReviewProcess.prototype.roleIsAvailable = function() {};
ReviewProcess.prototype.ensureRoleCompatible = function() {};
ReviewProcess.prototype.acceptApplication = function() {};
ReviewProcess.prototype.denyApplication = function() {};

util.inherits();
module.exports = ReviewProcess;
