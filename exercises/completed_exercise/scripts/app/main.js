
$(function() {

  // Start by creating a bookshelf element
  var bookShelfView = new App.Views.BookShelf({
        model: new App.Models.Book(DATA.bookshelf)
      });

  $('#app-container').html(bookShelfView.render());

  // VERSION 1: Single View for each book.
  // Add some books to the bookshelf!
  var $bookList = $('.book-list');

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

  // VERSION 2 BONUS: Create a Book List view and Collection that handles everything.
  var bookCollection = new App.Collections.Books(DATA.books);
  var bookListView = new App.Views.BookList({
      books: bookCollection.models
    });

  $bookList.append(bookListView.render());

});