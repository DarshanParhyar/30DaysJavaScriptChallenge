//Write a higher-order function that takes a function and a number, and calls the function that many times

const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func(i);
    }
};

// Example usage:
const greet = (index) => {
    console.log(`Hello, this is greeting number ${index + 1}!`);
};

repeatFunction(greet, 3);