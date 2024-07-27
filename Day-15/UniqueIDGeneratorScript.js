function createIDGenerator() {
    let lastID = 0;

    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();
console.log(generateID());  // Logs: 1
console.log(generateID());  // Logs: 2
