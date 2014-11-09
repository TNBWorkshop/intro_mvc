// make sure the global app object exists first
window.App = window.App || {};

App.Views = {};

// Book View
App.Views.Book = function(options) {
  options = options || {};

  MVC.View.call(this, {
    template: options.template || $('#book-template').html(),
    model: options.model
  });
};

App.Views.Book.prototype = Object.create(MVC.View.prototype);

// Bookshelf View
App.Views.BookShelf = function(options) {
  options = options || {};

  MVC.View.call(this, {
    template: options.template || $('#bookshelf-template').html(),
    model: options.model
  });
};

App.Views.BookShelf.prototype = Object.create(MVC.View.prototype);

// BONUS: BookList View
App.Views.BookList = function(options) {
  options = options || {};

  // expect options.books to be an array of models
  this.models = options.books || [];

  // assign a view class to use with each data object, 
  // or default to the framework view
  this.itemView = options.itemView || App.Views.Book;
};

App.Views.BookList.prototype.render = function() {
  var $div = $('<div />');

  // iterate through the list of book models
  // create a book view, and then
  // render them into the empty div
  for(var i = 0; i < this.models.length; i++) {
    var bookView = new this.itemView({
          model: this.models[i]
        });

    $div.append(bookView.render());
  }

  return $div;
};


