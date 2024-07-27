function createFunctions() {
    let functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push((function(i) {
            return function() {
                console.log(i);
            };
        })(i));
    }

    return functions;
}

const funcs = createFunctions();
funcs[0]();  // Logs: 0
funcs[1]();  // Logs: 1
funcs[2]();  // Logs: 2
