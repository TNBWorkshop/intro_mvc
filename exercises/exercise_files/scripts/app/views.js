// Create an App namespace to hold our custom App Views.
window.App = window.App || {};

App.BookThumbnailView = function(options) {
  MVC.View.call(this, options);

  this.$el.on('click', '.book-image', this.onClick.bind(this));
};

App.BookThumbnailView.prototype.onClick = function(event) {

  // ---------------------------
  // !!! Your code here !!!    |
  // ---------------------------

  $('#detail-container').html(detailView.render()).fadeIn();
};

App.BookDetailView = function(options) {
  MVC.View.call(this, options);

  this.$el.on('click', '.close', this.onClick.bind(this));
}

App.BookDetailView.prototype.onClick = function(event) {
  $('#detail-container').fadeOut(function() {
    $(this).empty();
  });
};

