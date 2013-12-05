var Liker = function() {
  this.like = 1;
  this.bind();
};

Liker.prototype = {
  updateLike : function() {
    this.like++;
    this.publish('liked');

  },

  render : function() {
    this.updateButton();
    this.logEntry();
  },

  updateButton : function() {
    $('#like').html(this.like);
  },

  logEntry : function() {
    $('#like-count').append('<li>' + new Date().toString() + '</li>');
  },

  bind : function() {
    var that = this;
    $('#like').on('click', function(e) {
      e.preventDefault();

      that.updateLike();
    });

    this.subscribe('liked', function() { this.render(); });
  }
};

Liker.mixin(PubSub);
