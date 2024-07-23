createPromise('Step 1', 1000)
  .then((message) => {
    console.log(message);
    return createPromise('Step 2', 2000);
  })
  .then((message) => {
    console.log(message);
    return createPromise('Step 3', 1000);
  })
  .then((message) => {
    console.log(message);
  });
