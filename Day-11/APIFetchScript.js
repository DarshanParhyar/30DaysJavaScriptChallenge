// Using Promises
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    console.log('Data fetched using promises:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// Using Async/Await
const fetchApiData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('Data fetched using async/await:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchApiData();
