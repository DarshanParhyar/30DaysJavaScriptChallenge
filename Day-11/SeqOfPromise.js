//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.


const fetchData = (data, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
  
  fetchData('Task 3: Fetching data 1', 1000)
    .then((data) => {
      console.log(data);
      return fetchData('Fetching data 2', 2000);
    })
    .then((data) => {
      console.log(data);
      return fetchData('Fetching data 3', 1000);
    })
    .then((data) => {
      console.log(data);
    });
  