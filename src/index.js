function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");

   console.log(response.data.conditon);


   cityElement.innerHTML = response.data.city;
  timeElement.innerHTML= formatDate(date);
  descriptionElement.innerHTML = response.data.conditon.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature); 


    
    temperatureElement.innerHTML = Math.round(temperature);
}



function searchCity(city) {
    let apiKey = "o7d2ac1dcaf10346f2680b68bdt41a83";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
    
}


function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit",handleSearchSubmit);

searchCity("Germany");