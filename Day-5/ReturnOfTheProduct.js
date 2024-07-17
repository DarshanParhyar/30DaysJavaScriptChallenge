//Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiply(num1, num2 = 1) {
    return num1 * num2;
}

console.log(multiply(5)); 