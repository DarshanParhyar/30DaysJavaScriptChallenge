// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchDataAsync = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log('Task 7: Data fetched using async/await:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  fetchDataAsync();
  