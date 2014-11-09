# Exercise 1 - Creating your own MVC Framework

Create your own mini MV* Framework using the basics of Class Inheritance.

Use the exercise files [provided here](https://github.com/TNBWorkshop/intro_mvc/tree/master/exercises/exercise_files) as a starting point.

### Create the Model Class
1. In the provided `models.js` file, create a `Model` class and assign it to the `MVC` namespace, like so:  
`MVC.Model = //your code here`
2. The `MVC.Model` class should take 2 arguments, `data` and `options`.
3. On creation, it should should assign the `data` argument to an `attributes` property.
  - make sure the `data` argument is an object before assigning it as a property, using the pattern:  
  `data = data || {};`
4. Create a function using `prototype` on the `Model` class called `get`, using this pattern:  
`MVC.Model.prototype.get = function() { //... }`
  - The `get` function should take one argument, `attrName`
  - the function should return a value inside `this.attributes` if it exists, or `false` if it doesn't.
5. Create a function using `prototype` on the `Model` class called `set`, using this pattern:  
`MVC.Model.prototype.set = function() { //... }`
  - The `set` function should take two arguments, `attrName` and 'newValue'
  - the function should either create or update an attribute with the name and value passed in.

**[Show Completed Code](./answer_1.js)**

### Create the View Class
1. In the provided `framework.js` file, create a `View` class and assign it to the `MVC` namespace, like so:  
`MVC.View = //your code here`
2. The `MVC.View` class should take 1 argument: `options`.
3. On creation, it should assign the following options to it's own properties:
  - the `options.template` argument to a `template` property.
  - the `options.model` argument to a `model` property.
4. Make sure the `options` argument is an object before trying to act on it, using this pattern:  
  `options = options || {};`
5. Create a function using the `prototype` on the `View` class called `render` using this pattern:  
`MVC.View.prototype.render = function() { //... }`
    - create a variable called `template` with the value of `Handlebars.compile(this.template)`. This will prepare the HTML template to fill in the `{{ property }}` fields with our actual data!
    - create a variable called `result`, with the value being the result of passing the `this.model.attributes` into the `template` like so:  
    `var result = template(this.model.attributes);
    - create a new property on the View called `this.$el`, and assign it the value of `result` as a jQuery object, like so:  
    `this.$el = $(result);`  
    This will allow us to bind events to child elements in the view later on.
    - finally, return the value of `this.$el`

**[Show Completed Code](./answer_2.js)**

