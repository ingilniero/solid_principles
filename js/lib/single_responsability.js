var Liker = function() {
  $('#like').on('click', function(e) {
    e.preventDefault();

    $(this).html(parseInt($(this).html()) + 1);

    $('#like-count').append('<li>' + new Date().toString() + '</li>');
  });
};
