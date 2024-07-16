const num = 5;  // You can change this number to calculate the factorial of a different number
let factorial = 1;
let l = 1;
do {
  factorial *= l;
  l++;
} while (l <= num);
console.log(`Factorial of ${num} is: ${factorial}`);
