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
counter.increment();  // Logs: Counter: 1
counter.increment();  // Logs: Counter: 2
console.log(counter.getCount());  // Logs: 2
