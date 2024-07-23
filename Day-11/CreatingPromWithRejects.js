//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Task 2: Promise rejected after 2 seconds'));
    }, 2000);
  });
  
  promise2.catch((error) => {
    console.error(error.message);
  });
  