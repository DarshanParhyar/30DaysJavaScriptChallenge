//Task 7: Function that memoizes results of another function
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));  
console.log(memoizedFactorial(5));  
