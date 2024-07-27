//Task 2: Closure maintaining a private counter

function createCounter() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
            console.log(`Counter: ${counter}`);
        },
        getCount: function() {
            return counter;
        }
    };
}

const counter = createCounter();
counter.increment();  
counter.increment();  
console.log(counter.getCount());  
