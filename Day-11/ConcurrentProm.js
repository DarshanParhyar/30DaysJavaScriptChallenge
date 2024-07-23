// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promiseA = new Promise((resolve) => setTimeout(() => resolve('Promise A'), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve('Promise B'), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve('Promise C'), 1500));

Promise.all([promiseA, promiseB, promiseC])
  .then((values) => {
    console.log('Task 8: All promises resolved:', values);
  });
