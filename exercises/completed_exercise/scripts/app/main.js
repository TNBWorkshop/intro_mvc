

var bookShelfModel = new MVC.Model(DATA.bookshelf);

var bookShelfView = new MVC.View({
  template: $('#bookshelf-template').html(),
  model: bookShelfModel
});

$('#app-container').html(bookShelfView.render());

// Target the child element .book-list inside the now-rendered bookshelf template
var $bookList = $('.book-list');

// iterate through each book item in the DATA.books array
$.each(DATA.books, function(index, bookData) {
  // create a new view for each book object
  var bookView = new App.BookThumbnailView({
    model: new MVC.Model(bookData),
    template: $('#book-thumbnail').html()
  });

  // add it to the end of the container
  $bookList.append(bookView.render());
});



