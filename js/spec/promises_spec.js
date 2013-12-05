describe('Promise', function() {
  it('is resolved', function() {
    var output = '';
    getJSON('examples/promised.json').then(function(data) {
      output += 'JSON got back';
    }).then(function() {
      expect(output).toBe('JSON got back');
    });
  });
});
