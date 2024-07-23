//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const resolvePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Task 4: Promise resolved');
      }, 2000);
    });
  };
  
  const asyncFunction1 = async () => {
    const result = await resolvePromise();
    console.log(result);
  };
  
  asyncFunction1();
  