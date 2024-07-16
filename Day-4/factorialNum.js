// Write a program to calculate the factorial of a number using a do...while loop.

let num = 5;
let factorial = 1;

do {
    factorial *= num;
    num--;
} while (num >= 1);

console.log(`The factorial of ${num} is: ${factorial}`);