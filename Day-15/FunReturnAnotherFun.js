//Task 1: Function returning another function


function outerFunction() {
    let outerVariable = 'I am from the outer scope!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction();  
