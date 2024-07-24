fetch("https://invalidurl.com")
    .then((response) => response.json())
    .catch((error) => console.log("Fetch error: " + error));

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
