
var Model = function(data, options) {
  data = data || {};
  options = options || {};

  this.attributes = data;
};

Model.prototype.get = function (attrName) {
  if(this.attributes[attrName]) {
    
    return this.attributes[attrName];
  } else {

    return false;
  }
};

App.Model = Model;