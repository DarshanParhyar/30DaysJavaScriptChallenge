const createPromise = (message, delay, shouldReject = false) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(new Error(message));
        } else {
          resolve(message);
        }
      }, delay);
    });
  };
  
  // Resolved promise
  createPromise('Promise resolved', 2000)
    .then((message) => {
      console.log(message);
    });
  
  // Rejected promise
  createPromise('Promise rejected', 2000, true)
    .catch((error) => {
      console.error(error.message);
    });
  