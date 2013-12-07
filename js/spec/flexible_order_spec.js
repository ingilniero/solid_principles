describe('Book rental', function() {
  describe('FlexibleOrder', function() {
    it('allows for some books to be returned prior the end date', function(){
      var user = new User('Sarah Gray');
      var order = new FlexibleOrder(user);
      var first_book = new Book('Foo', 6);
      var second_book = new Book('Bar', 3);

      order.addBook(first_book);
      order.addBook(second_book);
      order.process();
      order.terminateBook(second_book);

      var difference_in_days = order.dueDate.getDate() - new Date().getDate();

      expect(difference_in_days).toBe(6);
    });
  });
});
