var bookShelfModel = new MVC.Model(DATA.bookshelf);

var bookShelfView = new MVC.View({
  template: $('#bookshelf-template').html(),
  model: bookShelfModel
});

$('#app-container').html(bookShelfView.render());