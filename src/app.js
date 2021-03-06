const btn = document.querySelector('.weather');
const input = document.querySelector('.input');
const switchBtn = document.querySelector('#flexSwitchCheckDefault');

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
const windSpeedDiv = document.querySelector('.windSpeed');
const sunsetDiv = document.querySelector('.sunset');
const pressureDiv = document.querySelector('.pressure');

function weatherCheck(imgCode) {
  // checking API for imgCode and selecting the right img for the weather
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
    imgSrc = 'images/snowflake.png';
  } else if (imgCode === '50d' || imgCode === '50n') {
    imgSrc = 'images/Mist.png';
  }

  return imgSrc;
}

function humidityCheck(humid) { // checking humidity to assign right description
  let humidDesc = '';

  if (humid <= 25) {
    humidDesc = 'Humidity is low right now.';
  } else if (humid > 25 && humid <= 50) {
    humidDesc = 'Humidity is moderate right now.';
  } else if (humid > 50 && humid <= 75) {
    humidDesc = 'Humidity is high right now.';
  } else {
    humidDesc = 'Humidity is very high right now.';
  }
  return humidDesc;
}
// comparing actual temp to feelsLike temp to assign right description

function feelsLikeVSActual(FL, AC) {
  let feelsLikeDesc = '';

  if (FL < AC) {
    feelsLikeDesc = 'Wind is making it feel colder.';
  } else if (FL > AC) {
    feelsLikeDesc = 'Humidity is making it feel warmer.';
  } else {
    feelsLikeDesc = 'Similar to actual tempature.';
  }

  return feelsLikeDesc;
}

function cloudinessCheck(cloudinessPercent) { // checking cloudiness to assign right description
  let cloudinessDesc = '';

  if (cloudinessPercent <= 25) {
    cloudinessDesc = 'Cloud coverage is low right now.';
  } else if (cloudinessPercent > 25 && cloudinessPercent <= 50) {
    cloudinessDesc = 'Cloud coverage is moderate right now.';
  } else if (cloudinessPercent > 50 && cloudinessPercent <= 75) {
    cloudinessDesc = 'Cloud coverage is high right now.';
  } else {
    cloudinessDesc = 'Cloud coverage is very high right now.';
  }
  return cloudinessDesc;
}

function checkPressure(pres) { // checking airPressure to assign right description
  let pressureDesc = '';

  if (pres > 1022) {
    pressureDesc = 'Air pressure is high.';
  } else if (pres < 1022 && pres < 1009) {
    pressureDesc = 'Air pressure is normal.';
  } else {
    pressureDesc = 'Air pressure is low.';
  }

  return pressureDesc;
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
  tempH2.textContent = `${Math.round(temp)}??`;
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
  forcastTemp.textContent = `${Math.round(forTemp)}??`;
  forcastDiv.appendChild(forcastTemp);
}

function appendImg(img) {
  while (imgDiv.firstChild) {
    imgDiv.removeChild(imgDiv.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  weatherImg.classList.add('forcastImage');
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
  forcastTemp.textContent = `${Math.round(forTemp)}??`;
  forcastDiv2.appendChild(forcastTemp);
}

function appendImg2(img) {
  while (imgDiv2.firstChild) {
    imgDiv2.removeChild(imgDiv2.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.classList.add('forcastImage');
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
  forcastTemp.textContent = `${Math.round(forTemp)}??`;
  forcastDiv3.appendChild(forcastTemp);
}

function appendImg3(img) {
  while (imgDiv3.firstChild) {
    imgDiv3.removeChild(imgDiv3.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  weatherImg.classList.add('forcastImage');
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
  forcastTemp.textContent = `${Math.round(forTemp)}??`;
  forcastDiv4.appendChild(forcastTemp);
}

function appendImg4(img) {
  while (imgDiv4.firstChild) {
    imgDiv4.removeChild(imgDiv4.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  weatherImg.classList.add('forcastImage');
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
  forcastTemp.textContent = `${Math.round(forTemp)}??`;
  forcastDiv5.appendChild(forcastTemp);
}

function appendImg5(img) {
  while (imgDiv5.firstChild) {
    imgDiv5.removeChild(imgDiv5.firstChild);
  }
  const weatherImg = document.createElement('img');
  weatherImg.src = weatherCheck(img);
  weatherImg.classList.add('forcastImage');
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
  FeelsLikeSpan.textContent = `${Math.round(FL)}??`;
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

function appendWind(speed, direction) {
  while (windSpeedDiv.firstChild) {
    windSpeedDiv.removeChild(windSpeedDiv.firstChild);
  }
  const windSpan = document.createElement('span');
  windSpan.textContent = `${Math.round(speed * 1.609)}km`;
  const windDesc = document.createElement('aside');
  windDesc.textContent = `Wind is blowing at ${direction}?? degrees (Meteorological)`;
  windSpeedDiv.appendChild(windSpan);
  windSpeedDiv.appendChild(windDesc);
}

function appendSunset(time) {
  while (sunsetDiv.firstChild) {
    sunsetDiv.removeChild(sunsetDiv.firstChild);
  }
  const sunsetTime = document.createElement('aside');
  sunsetTime.textContent = `${time}`;
  sunsetTime.classList.add('time');
  sunsetDiv.appendChild(sunsetTime);
}

function appendPressure(pres) {
  while (pressureDiv.firstChild) {
    pressureDiv.removeChild(pressureDiv.firstChild);
  }
  const pressureSpan = document.createElement('span');
  pressureSpan.textContent = `${Math.round(pres)} hPa`;
  pressureSpan.classList.add('pressure');
  const pressureDesc = document.createElement('aside');
  pressureDesc.textContent = checkPressure(pres);
  pressureDiv.appendChild(pressureSpan);
  pressureDiv.appendChild(pressureDesc);
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
    const place = weatherData.city.name;
    console.log(place);
    appendCity(place);
    const description = weatherData.list[0].weather[0].main;
    appenndDesc(description);
    const { humidity } = weatherData.list[0].main;
    appendhumidity(humidity);
    const cloudiness = weatherData.list[0].clouds.all;
    appendcloudiness(cloudiness);
    const { pressure } = weatherData.list[0].main;
    appendPressure(pressure);
  } catch {
    while (headerTemp.firstChild) {
      headerTemp.removeChild(headerTemp.firstChild); // display error
    }
    const errorMsg = document.createElement('h2');
    errorMsg.textContent = 'Location Not Found';
    headerTemp.appendChild(errorMsg);
  }
}

async function getWindWeather() {
  const location = input.value;
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=10c73b0fb77ff9c5076821c36b0d55c3`, // grabing imperial data
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    const wind = weatherData.list[0].wind.speed;
    const windDirection = weatherData.list[0].wind.deg;
    appendWind(wind, windDirection);
    const { sunset } = weatherData.city;
    const sunsetConverted = new Date(sunset).toLocaleTimeString('en-US'); // converting Unix time
    appendSunset(sunsetConverted);
    console.log(weatherData);
  } catch {
    console.log('error');
  }
}

async function getForcastWeather() {
  const location = input.value;
  let fahrenheitOrCelsius;

  if (switchBtn.checked === true) { // checking if user toggled  fahrenheit or Celsius
    fahrenheitOrCelsius = 'imperial';
  } else {
    fahrenheitOrCelsius = 'metric';
  }

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${fahrenheitOrCelsius}&appid=10c73b0fb77ff9c5076821c36b0d55c3`,
      { mode: 'cors' },
    );
    const weatherData = await response.json(); // grabbing and appending each day for the forcast
    const actualTemp = weatherData.list[0].main.temp;
    appendTempeture(actualTemp);
    const feelsLike = weatherData.list[0].main.feels_like;
    appendFeelsLike(feelsLike, actualTemp);
    const day2 = weatherData.list[7].main.temp;
    const desc2 = weatherData.list[7].weather[0].description;
    const imgValue = weatherData.list[7].weather[0].icon;
    appendImg(imgValue);
    appendForcastDescription(desc2);
    appendForcastTemp(day2);
    const day3 = weatherData.list[14].main.temp;
    const desc3 = weatherData.list[14].weather[0].description;
    const imgValue2 = weatherData.list[14].weather[0].icon;
    appendImg2(imgValue2);
    appendForcastDescription2(desc3);
    appendForcastTemp2(day3);
    const day4 = weatherData.list[22].main.temp;
    const desc4 = weatherData.list[22].weather[0].description;
    const imgValue3 = weatherData.list[22].weather[0].icon;
    appendImg3(imgValue3);
    appendForcastDescription3(desc4);
    appendForcastTemp3(day4);
    const day5 = weatherData.list[30].main.temp;
    const desc5 = weatherData.list[30].weather[0].description;
    const imgValue4 = weatherData.list[30].weather[0].icon;
    appendImg4(imgValue4);
    appendForcastDescription4(desc5);
    appendForcastTemp4(day5);
    const day6 = weatherData.list[39].main.temp;
    const desc6 = weatherData.list[39].weather[0].description;
    const imgValue5 = weatherData.list[39].weather[0].icon;
    appendImg5(imgValue5);
    appendForcastDescription5(desc6);
    appendForcastTemp5(day6);
  } catch {
    console.log('error');
  }
}

btn.addEventListener('click', () => {
  getCurrentWeather();
  getForcastWeather();
  getWindWeather();
  input.value = '';
});
