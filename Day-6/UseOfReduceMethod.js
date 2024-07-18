// Use the reduce method to calculate the sum of all numbers in the array and log the result

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`The sum of all numbers in the array is: ${sum}`);
