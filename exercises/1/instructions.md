# Exercise 1 - Intro to Models and Views

Create the beginning of a Bookshelf app using the MVC pattern.

Use the exercise files [provided here](https://github.com/TNBWorkshop/intro_mvc/raw/master/exercises/exercise_files.zip) as a starting point.

### Part 1 - The Book Shelf

- Look at the classes inside the file `framework.js`. Read through the code and try to understand what's going on.

- Take a peek at `data.js` to get an idea what the data looks like.

- Inside of the `main.js` file, create a variable called `bookShelfModel`, and assign it a new instance of `MVC.Model` with the `DATA.bookshelf` object as the only argument.

- Inside of the `main.js` file, create a variable called `bookShelfView`, and assign it a new instance of `MVC.View`, and assign it the following options:
  * `template` should be `$('#bookshelf-template').html()`
  * `model` should be the variable you created with a new model, called `bookShelfModel`

- Render the contents of the view on the page, inside of the div with the id of `app-container` using jQuery. Like this:  
`$('#app-container').html(bookShelfView.render());`

**[See Solution](./answer_1.js)**

### Part 2 - The Filling the Bookshelf with Books

- Below the code you just wrote inside of `main.js`, create a new variable `$bookList`, and assign it the jQuery object `$('.book-list')`. This is where we will render the list of books.

- Create an iterator using `$.each` (or a regular `for` loop if you prefer) looping over each item in the `DATA.books` array, and do the following:
    * Create a new view for each book object, and assign it to a variable, such as `bookView`, with the following options:  
      - `template` should be `$('#book-thumbnail').html()`
      - `model` should be a new `MVC.Model`, with the data being the current object in the loop
    * Append each new view to the `$bookList` element using the jQuery like so:  
    `$bookList.append(bookView.render());`

**[See Solution](./answer_2.js)**





