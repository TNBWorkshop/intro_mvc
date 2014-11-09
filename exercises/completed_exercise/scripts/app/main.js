
$(function() {

  var bookModel = new MVC.Model(DATA.books[0]);

  var bookView = new MVC.View({
    template: $('#book-template').html(),
    model: bookModel
  });

  $('#app-container').html(bookView.render());

  // // Start by creating a bookshelf element
  // var bookShelfView = new App.Views.BookShelf({
  //       model: new App.Models.Book(DATA.bookshelf),
  //       template: $('#bookshelf-template').html()
  //     });

  // $('#app-container').html(bookShelfView.render());

  // // VERSION 1: Single View for each book.
  // // Add some books to the bookshelf!
  // var $bookList = $('.book-list');

  // // iterate through each book item in the DATA.books array
  // $.each(DATA.books, function(index, bookData) {
  //   // create a new view for each book object
  //   var bookView = new App.Views.Book({
  //     model: new App.Models.Book(bookData),
  //     template: $('#book-template').html()
  //   });

  //   // add it to the end of the container
  //   $bookList.append(bookView.render());
  // });

});