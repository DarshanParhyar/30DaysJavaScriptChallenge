// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log('Task 6: Data fetched using promises:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
