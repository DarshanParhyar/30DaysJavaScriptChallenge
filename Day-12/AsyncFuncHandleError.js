//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function asyncRandomPromise() {
    let randomPromise = new Promise((resolve, reject) => {
        let success = Math.random() > 0.5;
        if (success) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    });

    try {
        let result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log("Caught error: " + error);
    }
}

asyncRandomPromise();
