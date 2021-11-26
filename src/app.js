const btn = document.querySelector('.weather');
const input = document.querySelector('.input');
let maxTemp;
let minTemp;
let feelsLike;
let description;
let humidity;
let actualTemp;
let wind;
let cloudiness;
let place;
let day2;
let day3;
let day4;
let day5;
let day6;
let desc2;
let desc3;
let desc4;
let desc5;
let desc6;
let imgValue;
let imgValue2;
let imgValue3;
let imgValue4;
let imgValue5;

const headerTemp = document.querySelector('.main-temp');
const forcastDiv = document.querySelector('.desc');
const imgDiv = document.querySelector('.weatherImg');

const forcastDiv2 = document.querySelector('.desc2');
const imgDiv2 = document.querySelector('.weatherImg2');

const forcastDiv3 = document.querySelector('.desc3');
const imgDiv3 = document.querySelector('.weatherImg3');

const forcastDiv4 = document.querySelector('.desc4');
const imgDiv4 = document.querySelector('.weatherImg4');

const forcastDiv5 = document.querySelector('.desc5');
const imgDiv5 = document.querySelector('.weatherImg5');

const humidityDiv = document.querySelector('.humidity');
const feelsLikeDiv = document.querySelector('.feelsLike');
const cloudinessDiv = document.querySelector('.cloudiness');

function weatherCheck(imgCode) { // checking API for imgCode and selecting the appropriate img one
  let imgSrc = '';

  if (imgCode === '04d' || imgCode === '04n') {
    imgSrc = 'images/brokenClouds.png';
  } else if (imgCode === '01d' || imgCode === '01n') {
    imgSrc = 'images/clear.png';
  } else if (imgCode === '02d' || imgCode === '02n') {
    imgSrc = 'images/partialCloud.png';
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

function humidityCheck(humid) {
  let humidDesc = '';

  if (humid <= 25) {
    humidDesc = 'Humidity is low right now';
  } else if (humid > 25 && humid <= 50) {
    humidDesc = 'Humidity is moderate right now';
  } else if (humid > 50 && humid <= 75) {
    humidDesc = 'Humidity is high right now';
  } else {
    humidDesc = 'Humidity is very high right now';
  }
  return humidDesc;
}

function feelsLikeVSActual(FL, AC) {
  let feelsLikeDesc = '';

  if (FL < AC) {
    feelsLikeDesc = 'Wind is making it feel colder.';
  } else if (FL > AC) {
    feelsLikeDesc = 'Humidity is making it feel warmer.';
  } else {
    feelsLikeDesc = 'Similar to actual tempature';
  }

  return feelsLikeDesc;
}

function cloudinessCheck(cloudinessPercent) {
  let cloudinessDesc = '';

  if (cloudinessPercent <= 25) {
    cloudinessDesc = 'Cloud coverage is low right now';
  } else if (cloudinessPercent > 25 && cloudinessPercent <= 50) {
    cloudinessDesc = 'Cloud coverage is moderate right now';
  } else if (cloudinessPercent > 50 && cloudinessPercent <= 75) {
    cloudinessDesc = 'Cloud coverage is high right now';
  } else {
    cloudinessDesc = 'Cloud coverage is very high right now';
  }
  return cloudinessDesc;
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
  tempH2.textContent = `${Math.round(temp)}°`;
  tempH2.classList.add('tempFormat');
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
  forcastTemp.textContent = `${Math.round(forTemp)}°`;
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

// second DOM Forcast

function appendForcastDescription2(forDesc) {
  while (forcastDiv2.firstChild) {
    forcastDiv2.removeChild(forcastDiv2.firstChild);
  }
  const forcastDesc = document.createElement('h3');
  forcastDesc.textContent = `${forDesc}`;
  forcastDiv2.appendChild(forcastDesc);
}

function appendForcastTemp2(forTemp) {
  const forcastTemp = document.createElement('h3');
  forcastTemp.textContent = `${Math.round(forTemp)}°`;
  forcastDiv2.appendChild(forcastTemp);
}

function appendImg2(img) {
  while (imgDiv2.firstChild) {
    imgDiv2.removeChild(imgDiv2.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  imgDiv2.appendChild(weatherImg);
}

// third DOM Forcast

function appendForcastDescription3(forDesc) {
  while (forcastDiv3.firstChild) {
    forcastDiv3.removeChild(forcastDiv3.firstChild);
  }
  const forcastDesc = document.createElement('h3');
  forcastDesc.textContent = `${forDesc}`;
  forcastDiv3.appendChild(forcastDesc);
}

function appendForcastTemp3(forTemp) {
  const forcastTemp = document.createElement('h3');
  forcastTemp.textContent = `${Math.round(forTemp)}°`;
  forcastDiv3.appendChild(forcastTemp);
}

function appendImg3(img) {
  while (imgDiv3.firstChild) {
    imgDiv3.removeChild(imgDiv3.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  imgDiv3.appendChild(weatherImg);
}

// fourth DOM Forcast

function appendForcastDescription4(forDesc) {
  while (forcastDiv4.firstChild) {
    forcastDiv4.removeChild(forcastDiv4.firstChild);
  }
  const forcastDesc = document.createElement('h3');
  forcastDesc.textContent = `${forDesc}`;
  forcastDiv4.appendChild(forcastDesc);
}

function appendForcastTemp4(forTemp) {
  const forcastTemp = document.createElement('h3');
  forcastTemp.textContent = `${Math.round(forTemp)}°`;
  forcastDiv4.appendChild(forcastTemp);
}

function appendImg4(img) {
  while (imgDiv4.firstChild) {
    imgDiv4.removeChild(imgDiv4.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  imgDiv4.appendChild(weatherImg);
}

// fifth DOM Forcast

function appendForcastDescription5(forDesc) {
  while (forcastDiv5.firstChild) {
    forcastDiv5.removeChild(forcastDiv5.firstChild);
  }
  const forcastDesc = document.createElement('h3');
  forcastDesc.textContent = `${forDesc}`;
  forcastDiv5.appendChild(forcastDesc);
}

function appendForcastTemp5(forTemp) {
  const forcastTemp = document.createElement('h3');
  forcastTemp.textContent = `${Math.round(forTemp)}°`;
  forcastDiv5.appendChild(forcastTemp);
}

function appendImg5(img) {
  while (imgDiv5.firstChild) {
    imgDiv5.removeChild(imgDiv5.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  imgDiv5.appendChild(weatherImg);
}

// Weather INFO append

function appendhumidity(humi) {
  while (humidityDiv.firstChild) {
    humidityDiv.removeChild(humidityDiv.firstChild);
  }
  const humiditySpan = document.createElement('span');
  humiditySpan.textContent = `${Math.round(humi)}%`;
  const humidityDesc = document.createElement('aside');
  humidityDesc.textContent = humidityCheck(humi);
  humidityDiv.appendChild(humiditySpan);
  humidityDiv.appendChild(humidityDesc);
}

function appendFeelsLike(FL, realTemp) {
  while (feelsLikeDiv.firstChild) {
    feelsLikeDiv.removeChild(feelsLikeDiv.firstChild);
  }
  const FeelsLikeSpan = document.createElement('span');
  FeelsLikeSpan.textContent = `${Math.round(FL)}°`;
  const FeelsLikeDesc = document.createElement('aside');
  FeelsLikeDesc.textContent = feelsLikeVSActual(FL, realTemp);
  feelsLikeDiv.appendChild(FeelsLikeSpan);
  feelsLikeDiv.appendChild(FeelsLikeDesc);
}

function appendcloudiness(cloud) {
  while (cloudinessDiv.firstChild) {
    cloudinessDiv.removeChild(cloudinessDiv.firstChild);
  }
  const cloudinesSpan = document.createElement('span');
  cloudinesSpan.textContent = `${Math.round(cloud)}%`;
  const cloudinesDesc = document.createElement('aside');
  cloudinesDesc.textContent = cloudinessCheck(cloud);
  cloudinessDiv.appendChild(cloudinesSpan);
  cloudinessDiv.appendChild(cloudinesDesc);
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
    appendFeelsLike(feelsLike, actualTemp);
    humidity = weatherData.list[0].main.humidity;
    appendhumidity(humidity);
    cloudiness = weatherData.list[0].clouds.all;
    appendcloudiness(cloudiness);
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
    day3 = weatherData.list[14].main.temp;
    desc3 = weatherData.list[14].weather[0].description;
    imgValue2 = weatherData.list[14].weather[0].icon;
    appendImg2(imgValue2);
    appendForcastDescription2(desc3);
    appendForcastTemp2(day3);
    day4 = weatherData.list[22].main.temp;
    desc4 = weatherData.list[22].weather[0].description;
    imgValue3 = weatherData.list[22].weather[0].icon;
    appendImg3(imgValue3);
    appendForcastDescription3(desc4);
    appendForcastTemp3(day4);
    day5 = weatherData.list[30].main.temp;
    desc5 = weatherData.list[30].weather[0].description;
    imgValue4 = weatherData.list[30].weather[0].icon;
    appendImg4(imgValue4);
    appendForcastDescription4(desc5);
    appendForcastTemp4(day5);
    day6 = weatherData.list[39].main.temp;
    desc6 = weatherData.list[39].weather[0].description;
    imgValue5 = weatherData.list[39].weather[0].icon;
    appendImg5(imgValue5);
    appendForcastDescription5(desc6);
    appendForcastTemp5(day6);
  } catch {
    console.log('AYO');
  }
}

btn.addEventListener('click', () => {
  getCurrentWeather();
  getForcastWeather();
});
