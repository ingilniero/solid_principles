describe('Book rental', function() {
  describe('Order', function() {
    var user = new User('Jhon Doe');
    var book = new Book('Lord of the Rings');

    it('belongs to user', function() {
      expect(new FlexibleOrder(user).user).toBe(user);
    });

    it('can have books', function() {
      var order = new FlexibleOrder(user);
      order.addBook(book);
      expect(order.items[0].book).toBe(book);
    });

    describe('with two books with different day limits', function() {
      var second_book = new Book('Harry Potter', 3);

      it('sets the appropiate day limit', function() {
        var order = new FlexibleOrder(user);
        order.addBook(book);
        order.addBook(second_book);

        expect(order._minDayLimit()).toBe(3);
      });
    });
  });
});
