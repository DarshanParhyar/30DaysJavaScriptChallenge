//Task 1: Create an object representing a book and log it to the console.

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

console.log(book);

//Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);



//Object methods


//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getSummary = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getSummary());


//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.


book.updateYear = function(newYear) {
    this.year = newYear;
};

book.updateYear(2021);
console.log(book);
