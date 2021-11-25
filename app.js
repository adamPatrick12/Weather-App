const btn = document.querySelector('.weather');
const input = document.querySelector('.input');
let maxTemp;
let minTemp;
let feelsLike;
let description;
let humidity;
let actualTemp;
let wind;

const div = document.querySelector('.main-temp');

function appendTempeture(temp) {
  div.removeChild(div.lastElementChild);
  const tempH2 = document.createElement('h2');
  tempH2.textContent = `${temp}° C`;
  div.appendChild(tempH2);
}

btn.addEventListener('click', () => {
  const location = input.value;

  async function getGif() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=10c73b0fb77ff9c5076821c36b0d55c3`,
        { mode: 'cors' },
      );
      const weatherData = await response.json();
      console.log(weatherData);
      actualTemp = weatherData.list[0].main.temp;
      appendTempeture(actualTemp);
      maxTemp = weatherData.list[0].main.temp_max;
      minTemp = weatherData.list[0].main.temp_min;
      feelsLike = weatherData.list[0].main.feels_like;
      description = weatherData.list[0].weather[0].main;
      humidity = weatherData.list[0].main.humidity;
      wind = weatherData.list[0].wind.speed;
      console.log(actualTemp);
      console.log(minTemp);
      console.log(maxTemp);
      console.log(feelsLike);
      console.log(description);
      console.log(humidity);
      console.log(wind);
    } catch {
      console.log('AYO');
    }
  }
  getGif();
});
