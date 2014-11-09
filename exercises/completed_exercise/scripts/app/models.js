// make sure the global app object exists first
window.App = window.App || {};

App.Models = {};

App.Models.Book = function(data, options) {
  MVC.Model.call(this, data, options);
};

// BONUS! Collections
App.Collections = {};

// Book Collection - contains an array of models.
App.Collections.Books = function(data, options) {
  MVC.Collection.call(this, data, options);
};