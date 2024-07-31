//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const str1 = "JavaScript is a popular programming language. Many developers love JavaScript.";
const regex1 = /JavaScript/g;
const matches1 = str1.match(regex1);
console.log(matches1);
