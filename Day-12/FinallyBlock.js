//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function executeWithFinally() {
    try {
        console.log("In try block.");
        throw new Error("Intentional error.");
    } catch (error) {
        console.log("In catch block: " + error.message);
    } finally {
        console.log("In finally block.");
    }
}

executeWithFinally();
