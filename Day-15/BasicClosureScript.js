function outerFunction() {
    let outerVariable = 'I am from the outer scope!';

    return function innerFunction() {
        console.log(outerVariable);
    };
}

const myFunction = outerFunction();
myFunction();  // Logs: I am from the outer scope!
