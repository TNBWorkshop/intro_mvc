var bookModel = new MVC.Model(DATA.books[0]);

var bookView = new MVC.View({
  template: $('#book-template').html(),
  model: bookModel
});

$('#app-container').html(bookView.render());