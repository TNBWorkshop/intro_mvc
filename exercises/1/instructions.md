# Exercise 1 - Creating your own MVC Framework

Create your own mini MV* Framework using the basics of Class Inheritance.

Use the exercise files [provided here](https://github.com/TNBWorkshop/intro_mvc/tree/master/exercise_files) as a starting point.

### Create the Model Class
1. In the provided `models.js` file, create a `Model` class.
2. The `Model` class should take 2 arguments, `data` and `options`.
3. On creation, it should should assign the `data` argument to an `attributes` property.
  - make sure the `data` argument is an object before assigning it as a property, using the pattern:  
  `data = data || {};`
4. Create a function using `prototype` on the `Model` class called `get`, using this pattern:  
`Model.prototype.get = function() { //... }`
  - The `get` function should take one argument, `attrName`
  - the function should return a value inside `this.attributes` if it exists, or `false` if it doesn't.
5. Assign the `Model` class to the `App` namespace, like so:  
`App.Model = Model;`

**[Show Completed Code](./answer_1.js)**

### Create the View Class
1. In the provided `views.js` file, create a `View` class.
2. The `View` class should take 1 argument: `options`.
3. On creation, it should assign the `options.template` argument to a `template` property.
  - make sure the `options` argument is an object before trying to act on it, using this pattern:  
  `options = options || {};`
4. On creation, it should also assign the `options.model` argument to the `model` propertly. 
5. Create a function using the `prototype` on the `View` class called `render` using this pattern:  
`View.prototype.render = function() { //... }`
    - create a variable called `template` with the value of `Handlebars.compile(this.template)`. This will prepare the HTML template to fill in the `{{ property }}` fields with our actual data!
    - return the resulting value of passing `this.model.attributes` into the `template` variable, like so:  
    `return template(this.model.attributes);`
6. Assign the `Model` class to the `App` namespace, like so:  
`App.Model = Model;`

**[Show Completed Code](./answer_2.js)**

