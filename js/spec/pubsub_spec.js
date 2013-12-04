describe('counting tags', function() {
  it('prints the tahg count via pubsub for each added tag', function() {
    var Class = function() {};
    Class.mixin.apply(Class, [ Tags ]);
    Class.mixin.apply(Class, [ PubSub ]);

    var object = new Class();
    var output = "";

    object.subscribe('tagAdded', function() {
      output = this.countTags().toString();
    });

    object.addTag('foobar')
    expect(output).toEqual("1");
  });
});
