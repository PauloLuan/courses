var Emitter = require('events').EventEmitter,
  util = require('util'),
  self,
  callback;

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

ReviewProcess.prototype.ensureAppIsValid = function() {
  if (app.isValid()) {
    self.emmit('validated', app);
  } else {
    self.emmit('invalid', app.validationMessage());
  }
};

ReviewProcess.prototype.findNextMission = function(app) {
  app.mission = {
    commander: null,
    pilot: null,
    MAVPilot: null,
    passengers: []
  };

  self.emmit('mission-selected', app);
};

ReviewProcess.prototype.roleIsAvailable = function(app) {
  self.emmit('role-available', app);
};

ReviewProcess.prototype.ensureRoleCompatible = function(app) {
  self.emmit('role-compatible', app);
};

ReviewProcess.prototype.acceptApplication = function(app) {
  callback(null, {
    success: true,
    message: 'Welcome to the Mars Program!'
  });
};

ReviewProcess.prototype.denyApplication = function(message) {
  callback(null, {
    success: false,
    message: message
  });
};

ReviewProcess.prototype.processApplication = function(app, next) {
  self.emmit('application-received');
  callback = next;
};

util.inherits(ReviewProcess, Emitter);
module.exports = ReviewProcess;
