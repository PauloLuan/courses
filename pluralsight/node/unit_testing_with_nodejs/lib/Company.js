var Company = function(employees) {
  var self = this;
  self._employees = employees;
}

Company.prototype.getEmployees = function() {
  return _employees
};

Company.prototype.addEmployee = function(employeeId, callback) {
  // do stuff
  callback();
};
Company.prototype.removeEmployee = function() {};

module.exports = Company;
