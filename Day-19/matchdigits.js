//Task 2: Write a regular expression to match all digits in a string. Log the matches.

const str2 = "My phone number is 142-7890 and my zip code is 98765.";
const regex2 = /\d+/g;
const matches2 = str2.match(regex2);
console.log(matches2);
