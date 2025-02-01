async function findBestRoute() {
    const location = document.getElementById("location").value;
    const destination = document.getElementById("destination").value;

    console.log("Sending request with:", { location, destination });

    try {
        const response = await fetch("http://127.0.0.1:5000/find_route", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ location, destination }),
        });

        console.log("Response received:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const resultElement = document.getElementById("result");

        if (data.route) {
            resultElement.textContent = `${data.route} (${data.time} minutes)`;
        } else {
            resultElement.textContent = "No route found.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").textContent = "An error occurred. Check the console for details.";
    }
}