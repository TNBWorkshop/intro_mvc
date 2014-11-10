// This is where we'll store all of our MVC classes to be used by our App.
window.MVC = window.MVC || {};

// MODEL CLASS

MVC.Model = function(data, options) {
  data = data || {};
  options = options || {};

  this.attributes = data;

  this.get = function (attrName) {
    if(this.attributes[attrName]) {
      
      return this.attributes[attrName];
    } else {

      return false;
    }
  };
  
  this.set = function(attrName, newValue) {
    this.attributes[attrName] = newValue;
  };

};

// COLLECTION CLASS
MVC.Collection = function(data, options) {
  // this time we expect an array of objects
  data = data || [];
  options = options || {};

  // specify a model to use in the options, or use the base Model from the framework.
  this.model = options.model || MVC.Model;

  // create an empty array to store our future models
  this.models = [];

  // iterate through each object in the array, and 
  // add it to the models property.
  for(var i = 0; i < data.length; i++) {
    this.models.push(new this.model(data[i]));
  }

};


// VIEW CLASS

MVC.View = function(options) {
  options = options || {};

  this.model = options.model;
  this.template = options.template;

  // where we will keep a version of the template to 
  this.$el = $('<div />');

  this.render = function () {
    // prepare the html template for use with model data
    var template = Handlebars.compile(this.template);
    var result = template(this.model.attributes);

    // create a jQuery object to reference our view's rendered content
    // this will be used for event binding later
    this.$el.html(result);

    // pass compiled template our model data and return the result
    return this.$el;
  };

};


