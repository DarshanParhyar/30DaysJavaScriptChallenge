//Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunction(func1, func2, value) {
    return func2(func1(value));
}



function add10(num) {
    return num + 10;
}

function multiplyBy5(num) {
    return num * 5;
}

console.log(applyFunction(add10, multiplyBy5, 10)); 
