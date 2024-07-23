const asyncAwaitExample = async () => {
    try {
      const result1 = await createPromise('Step 1', 1000);
      console.log(result1);
  
      const result2 = await createPromise('Step 2', 2000);
      console.log(result2);
  
      const result3 = await createPromise('Step 3', 1000);
      console.log(result3);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  asyncAwaitExample();
  