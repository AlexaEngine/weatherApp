// Fetch and display weather data using a callback function
function fetchAndSetWeatherData(city, callback) {
    const apiKey = "2c7e8eca246bb6a657e680146cd71397"; // Use your actual API key here
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.error("Error fetching weather data:", error));
}

// Callback function to display weather data
function displayWeatherData(data) {
    const weatherContainer = document.getElementById("weatherContainer");

    // Check if the response has weather data
    if (data && data.main && data.name) {
        weatherContainer.textContent = `Temperature in ${data.name}: ${Math.round(data.main.temp - 273.15)}°C`;
    } else {
        weatherContainer.textContent = "Weather data not available. Please try again.";
    }
}

// Function to get weather data when button is clicked
function getWeatherData() {
    const city = document.getElementById("city").value;
    fetchAndSetWeatherData(city, displayWeatherData);
}

// Added event listener to the button to trigger fetching weather data
const button = document.getElementById("button");
button.addEventListener("click", getWeatherData);
