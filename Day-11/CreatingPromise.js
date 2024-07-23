//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Task 1: Promise resolved after 2 seconds');
    }, 2000);
  });
  
  promise1.then((message) => {
    console.log(message);
  });
  