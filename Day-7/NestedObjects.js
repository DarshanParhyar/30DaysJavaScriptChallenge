//Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

const library = {
    name: "Central Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ]
};

console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(`Library Name: ${library.name}`);
library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});

//This Keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} was published in ${this.year}`;
};

console.log(book.getDetails());



//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.


for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}


//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));
