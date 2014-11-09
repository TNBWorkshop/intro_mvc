# Exercise 1 - Intro to Models and Views

Create the beginning of a Bookshelf app using the MVC pattern.

Use the exercise files [provided here](https://github.com/TNBWorkshop/intro_mvc/tree/master/exercises/exercise_files) as a starting point.

- Look at the classes inside the file `framework.js`. Read through the code and try to understand what's going on.

- Take a peek at `data.js` to get an idea what the data looks like.

- Inside of the `main.js` file, create a variable called `bookModel`, and assign it a new instance of `MVC.Model` with the first book inside the `DATA.books` array as the only argument.

- Inside of the `main.js` file, create a variable called `bookView`, and assign it a new instance of `MVC.View`, and assign it the following values:
  * `template` should be `$('#book-template').html()`
  * `model` should be the variable you created with a new model, called `bookModel`

- Render the contents of the view on the page, inside of the div with the id of `app-container` using jQuery. Like this:  
`$('#app-container').html(bookView.render());`


**[See Solution]()




