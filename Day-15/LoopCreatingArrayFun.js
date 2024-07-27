//Task 5: Loop creating an array of functions

function createFunctions() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }

    return functions;
}

const funcs = createFunctions();
funcs[0]();  
funcs[1]();  
funcs[2]();  
