var Teacher = function() {
  return this;
};

var Student = function() {
  return this;
};

var UserPasswordActions = function() {};

UserPasswordActions.prototype = {
  resetPassword: function() {}
};

var UserLoginActions = function() {};

UserLoginActions.prototype = {
  login: function(password) {},
};
