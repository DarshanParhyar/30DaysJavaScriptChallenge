//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promiseA, promiseB, promiseC])
  .then((value) => {
    console.log('Task 9: First promise resolved:', value);
  });
