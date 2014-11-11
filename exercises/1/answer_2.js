// Add some books to the bookshelf!

// Target the child element .book-list inside the now-rendered bookshelf template
var $bookList = $('.book-list');

// iterate through each book item in the DATA.books array
$.each(DATA.books, function(index, bookData) {
  // create a new view for each book object
  var bookView = new MVC.View({
    model: new MVC.Model(bookData),
    template: $('#book-template').html()
  });

  // add it to the end of the container
  $bookList.append(bookView.render());
});

