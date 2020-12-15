const weatherBtn = document.querySelector(".weather-btn");
const weatherPar1 = document.querySelector(".weather-par-1");
const weatherPar2 = document.querySelector(".weather-par-2");
const weatherPar3 = document.querySelector(".weather-par-3");
const COORDS = "coords";
const APIkey = "4af4d07cb88e48380fc2418e6f5646d7";

function getWeather() {
  const currentPosition = JSON.parse(localStorage.getItem(COORDS));
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${currentPosition.lat}&lon=${currentPosition.lon}&appid=${APIkey}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const weather = json;
      const description = weather.weather[0].description;
      const temp = weather.main.temp;
      const feels_like = weather.main.feels_like;
      weatherPar1.innerHTML = `Currently ${description}`;
      weatherPar2.innerHTML = `Temperature is ${temp}ºC `;
      weatherPar3.innerHTML = `Feels like ${feels_like}ºC`;
      weatherBtn.classList.toggle("hide");
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsObj = {
    lat,
    lon,
  };
  saveCoords(coordsObj);
  getWeather();
}

function handleGeoError() {
  console.log("Location denied");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function init() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    weatherBtn.addEventListener("click", askCoords);
  } else {
    getWeather();
  }
}

init();
