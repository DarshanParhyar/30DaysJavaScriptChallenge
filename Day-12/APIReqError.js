//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    try {
        let response = await fetch("https://invalidurl.com");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error: " + error);
    }
}

fetchData();
