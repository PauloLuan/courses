var EventEmitter = require('events').EventEmitter,
  util = require('util'),
  _ = require('lodash'),
  self,
  callback;

var ReviewProcess = function() {
  this.init();
};

util.inherits(ReviewProcess, EventEmitter);

ReviewProcess.prototype.init = function() {
  self = this;

  // event path
  self.on("application-received", self.ensureAppIsValid);
  self.on("validated", self.findNextMission);
  self.on("mission-selected", self.roleIsAvailable);
  self.on("role-available", self.ensureRoleCompatible);
  self.on("role-compatible", self.acceptApplication);
  self.on("invalid", self.denyApplication);
};

ReviewProcess.prototype.ensureAppIsValid = function(app) {
  if (app.isValid()) {
    self.emit('validated', app);
  } else {
    self.emit('invalid', app.validationMessage());
  }
};

ReviewProcess.prototype.findNextMission = function(app) {
  app.mission = {
    commander: null,
    pilot: null,
    MAVPilot: null,
    passengers: []
  };

  self.emit('mission-selected', app);
};

ReviewProcess.prototype.roleIsAvailable = function(app) {
  self.emit('role-available', app);
};

ReviewProcess.prototype.ensureRoleCompatible = function(app) {
  self.emit('role-compatible', app);
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
  callback = next;
  self.emit('application-received', app);
};

module.exports = ReviewProcess;
