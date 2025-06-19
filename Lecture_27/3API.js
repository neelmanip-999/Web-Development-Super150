// Define API Key
let API_Key = '378b49d2c6ec0f620bf9e6e07358ff0f';

// Define the city name for which weather details are needed
let city_name = 'Mathura';

// Function to generate the Geocoding API URL (to get latitude & longitude of a city)
let geoCodingAPI = (city_name, API_Key) => (`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_Key}`);

// Function to generate the Weather API URL (to get weather details using latitude & longitude)
let weatherAPI = (lat, lon, API_Key) => (`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}`);

// Function to get weather details using latitude and longitude
function getWeatherDetails(API_Key, lat, lon) {
    fetch(weatherAPI(lat, lon, API_Key))
        .then((data) => data.json()) // Convert response to JSON format
        .then((data) => {
            console.log(data.list[0]); // Log the first weather forecast data
        })
        .catch((ele) => {
            console.log(ele); // Log any errors
        });
}

// Method -1: Fetching city coordinates and then fetching weather details
fetch(geoCodingAPI(city_name, API_Key))
    .then((data) => data.json()) // Convert response to JSON format
    .then((data) => {
        return {'lat': data[0].lat, 'lon': data[0].lon}; // Extract latitude and longitude
    })
    .then((data) => {
        getWeatherDetails(API_Key, data.lat, data.lon); // Call weather API with obtained coordinates
    })
    .catch((ele) => {
        console.log(ele); // Log any errors
    });

/*
Explanation:

1. **geoCodingAPI(city_name, API_Key)**:
   - Constructs the API URL to fetch latitude and longitude of a given city using OpenWeatherMap Geocoding API.

2. **weatherAPI(lat, lon, API_Key)**:
   - Constructs the API URL to fetch weather details for the given latitude and longitude.

3. **getWeatherDetails(API_Key, lat, lon)**:
   - Fetches the weather details using the Weather API and logs the first forecast data.
   - Converts the API response to JSON.
   - Handles any errors with `.catch()`.

4. **Method -1 (Fetching coordinates and then fetching weather details)**:
   - Fetches the latitude and longitude of `city_name`.
   - Uses `.then()` to extract the latitude and longitude from the API response.
   - Calls `getWeatherDetails()` with the extracted coordinates to fetch weather data.
   - Handles errors with `.catch()`.

5. **Error Handling**:
   - If the API request fails (invalid API key, network issue, etc.), the `.catch()` block logs the error.
*/
