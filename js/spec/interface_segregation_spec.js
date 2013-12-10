describe('Interface Segregation', function() {
  describe('Teacher', function() {
    Teacher.mixin(UserLoginActions);
    Teacher.mixin(UserPasswordActions);

    it('can login', function() {
      var t = new Teacher('Jhon Doe');
      expect(t.login).toBeDefined();
    });

    it('can request a password reset', function() {
      var t = new Teacher('Jhon Doe');
      expect(t.resetPassword).toBeDefined();
    });
  });

  describe('Student', function() {
    Student.mixin(UserLoginActions);

    it('can login', function() {
      var s = new Student('Alexander Norht');
      expect(s.login).toBeDefined();
    });

    it('cannot request a password reset', function() {
      var s  = new Student('Alexander North');
      expect(s.resetPassword).toBeUndefined();
    });
  });
});
