//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(`First: ${first}, Second: ${second}`);

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);
