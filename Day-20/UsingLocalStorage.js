//Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value

// Saving a string value to localStorage
localStorage.setItem('myString', 'Hello, LocalStorage!');

// Retrieving the string value from localStorage
const myString = localStorage.getItem('myString');
console.log(myString);
