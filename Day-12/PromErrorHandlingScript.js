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

async function asyncRandomPromise() {
    try {
        let result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log("Caught error: " + error);
    }
}

asyncRandomPromise();
