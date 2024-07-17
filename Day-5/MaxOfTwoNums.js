//Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(num1, num2) {
  if (num1 > num2) {
    console.log(`The maximum number is ${num1}`);
  } else {
    console.log(`The maximum number is ${num2}`);
  }
};


findMax(5, 10); 