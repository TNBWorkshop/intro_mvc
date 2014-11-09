var View = function(options) {
  options = options || {};

  this.model = options.model;
  this.template = options.template;

};

Model.prototype.render = function () {
  var template = Handlebars.compile(this.template);

  return template(this.model.attributes);
};

App.View = View;