//Task 4: Closure capturing a user's name

function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetAlice = createGreeter('mahi');
greetAlice();  
const greetBob = createGreeter('jinxy');
greetBob();  
