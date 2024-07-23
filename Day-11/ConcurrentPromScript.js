// Using Promise.all
Promise.all([createPromise('Promise 1', 1000), createPromise('Promise 2', 2000), createPromise('Promise 3', 1500)])
  .then((values) => {
    console.log('All promises resolved:', values);
  });

// Using Promise.race
Promise.race([createPromise('Promise 1', 1000), createPromise('Promise 2', 2000), createPromise('Promise 3', 1500)])
  .then((value) => {
    console.log('First promise resolved:', value);
  });
