const btn = document.querySelector('.weather');
const input = document.querySelector('.input');
let maxTemp;
let minTemp;
let feelsLike;
let description;
let humidity;
let actualTemp;
let wind;
let place;
let day2;
let desc2;
let imgValue;

const headerTemp = document.querySelector('.main-temp');
const forcastDiv = document.querySelector('.desc');
const imgDiv = document.querySelector('.weatherImg');

function weatherCheck(imgCode) { // checking API for imgCode and selecting the appropriate img one
  let imgSrc = '';

  if (imgCode === '04d' || imgCode === '04n') {
    imgSrc = 'images/brokenClouds.png';
  } else if (imgCode === '01d' || imgCode === '01n') {
    imgSrc = 'images/clear.png';
  } else if (imgCode === '02d' || imgCode === '02n') {
    imgSrc = 'images/clouds.png';
  } else if (imgCode === '03d' || imgCode === '03n') {
    imgSrc = 'images/partialCloud.png';
  } else if (imgCode === '09d' || imgCode === '09n') {
    imgSrc = 'images/heavyRain';
  } else if (imgCode === '10d' || imgCode === '10n') {
    imgSrc = 'images/rain.png';
  } else if (imgCode === '11d' || imgCode === '11n') {
    imgSrc = 'images/thunder.png';
  } else if (imgCode === '13d' || imgCode === '13n') {
    imgSrc = 'images/snowFlake.png';
  } else if (imgCode === '50d' || imgCode === '50n') {
    imgSrc = 'images/Mist.png';
  }

  return imgSrc;
}

function appendCity(city) {
  while (headerTemp.firstChild) {
    headerTemp.removeChild(headerTemp.firstChild);
  }
  const geoLocation = document.createElement('h2');
  geoLocation.textContent = city;
  headerTemp.appendChild(geoLocation);
}

function appendTempeture(temp) {
  const tempH2 = document.createElement('h2');
  tempH2.textContent = `${temp}°`;
  headerTemp.appendChild(tempH2);
}

function appenndDesc(condition) {
  const cond = document.createElement('h4');
  cond.textContent = condition;
  headerTemp.appendChild(cond);
}

function appendForcastDescription(forDesc) {
  while (forcastDiv.firstChild) {
    forcastDiv.removeChild(forcastDiv.firstChild);
  }
  const forcastDesc = document.createElement('h3');
  forcastDesc.textContent = `${forDesc}`;
  forcastDiv.appendChild(forcastDesc);
}

function appendForcastTemp(forTemp) {
  const forcastTemp = document.createElement('h3');
  forcastTemp.textContent = `${forTemp}°`;
  forcastDiv.appendChild(forcastTemp);
}

function appendImg(img) {
  while (imgDiv.firstChild) {
    imgDiv.removeChild(imgDiv.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  imgDiv.appendChild(weatherImg);
}

async function getCurrentWeather() {
  const location = input.value;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=10c73b0fb77ff9c5076821c36b0d55c3`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    console.log(weatherData);
    place = weatherData.city.name;
    console.log(place);
    appendCity(place);
    actualTemp = weatherData.list[0].main.temp;
    appendTempeture(actualTemp);
    description = weatherData.list[0].weather[0].main;
    appenndDesc(description);
    feelsLike = weatherData.list[0].main.feels_like;
    humidity = weatherData.list[0].main.humidity;
    wind = weatherData.list[0].wind.speed;
  } catch {
    console.log('AYO');
  }
}

async function getForcastWeather() {
  const location = input.value;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=10c73b0fb77ff9c5076821c36b0d55c3`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    day2 = weatherData.list[7].main.temp;
    desc2 = weatherData.list[7].weather[0].description;
    imgValue = weatherData.list[7].weather[0].icon;
    appendImg(imgValue);
    appendForcastDescription(desc2);
    appendForcastTemp(day2);
  } catch {
    console.log('AYO');
  }
}

btn.addEventListener('click', () => {
  getCurrentWeather();
  getForcastWeather();
});
