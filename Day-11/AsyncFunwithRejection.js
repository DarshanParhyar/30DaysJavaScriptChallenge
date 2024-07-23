//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message

const rejectPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Task 5: Promise rejected'));
      }, 2000);
    });
  };
  
  const asyncFunction2 = async () => {
    try {
      const result = await rejectPromise();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  asyncFunction2();
  