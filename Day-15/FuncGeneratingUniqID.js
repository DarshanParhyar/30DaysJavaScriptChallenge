//Task 3: Function generating unique IDs

function createIDGenerator() {
    let lastID = 0;

    return function() {
        lastID++;
        return lastID;
    };
}

const generateID = createIDGenerator();
console.log(generateID());  
console.log(generateID());  
