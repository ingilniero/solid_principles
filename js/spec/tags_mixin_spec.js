describe('TagsMixin', function() {
  var Class;

  beforeEach(function() {
    Class = function() {};
    Class.mixin.apply(Class, [ Tags ]);
  });

  it('has tags', function() {
    expect(new Class().listTags()).toEqual([])
  });

  it('adds a tag', function() {
    var object = new Class();
    object.addTag('foo');

    expect(object.listTags()).toEqual([ 'foo' ]);
  });

  it('removes a tag', function() {
    var object = new Class();
    object.addTag('bar')
    object.addTag('foo')
    object.removeTag('bar')
    expect(object.listTags()).toEqual(['foo']);
  });
});
