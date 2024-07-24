//ask 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

let randomPromise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;
    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

randomPromise
    .then((message) => console.log(message))
    .catch((error) => console.log("Caught error: " + error));
