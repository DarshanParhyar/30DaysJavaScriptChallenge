//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://invalidurl.com")
    .then((response) => response.json())
    .catch((error) => console.log("Fetch error: " + error));
