describe('Book rental', function() {
  describe('Stats', function() {
    var stats,
        order = new Order(),
        book = new Book('Foo'),
        second_book = new Book('Bar');

    beforeEach(function() {
      stats = new Stats();
      order.addBook(book);
      spyOn(Library, 'allOrders').andReturn([ order]);
    });

    it('retrieves the currently rented books', function() {
      var orders = Library.allOrders();
      expect(stats.rentedBooks(orders)).toEqual([ book ]);
    });
  });
});
