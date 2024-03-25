// 49.76046863531079, 6.643955213589132
const currentTepm = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={apiKey}
const apiKey = 'd3e804200caa48086711fbdd84b6c976';
const latitude = 49.76;
const longitude = 6.64;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;



const callw = async () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      display(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

const display = (data) => {
    currentTepm.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`
}

callw()