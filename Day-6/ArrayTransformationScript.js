
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map: Double each number
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:"+ doubled);

// filter: Get only even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:"+ evens);

// reduce: Sum all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:"+ sum);
