// Dark
const dark = document.querySelector('#dark')
const body = document.querySelector('body')
const main = document.querySelector('main')
const card = document.querySelectorAll('.card')
dark.addEventListener('click', () => {
    body.classList.toggle('body-dark');
    main.classList.toggle('main-dark');
    dark.classList.toggle('darkon');
    card.forEach((cardel) => {
        cardel.classList.toggle('card-dark');
    })
})

// Date
let currentYear = new Date().getFullYear();
document.querySelector('#year').innerHTML=currentYear;
let lastModificatedDate = document.lastModified;
document.querySelector('#lastModified').innerHTML=`Last Modification ${lastModificatedDate}`;

// Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templetext = document.querySelector('#templetext')
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');	
	templetext.classList.toggle('herotempletextmobile')
});


// 49.76046863531079, 6.643955213589132
const currentTepm = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={apiKey}
const apiKey = 'd3e804200caa48086711fbdd84b6c976';
const latitude = -26.82;
const longitude = -65.22;
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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTepm.innerHTML = `${desc} - ${data.main.temp}&deg;F `;
}

callw()

// JSON Links
async function readjson() {
    fetch('./data/links.json')
    .then(data => {
        return data.json()
    })
    .then(data => {
        displayLinks(data['weeks'])
    })
}
readjson()

function displayLinks(data) {
    const ul = document.querySelector('ul')
    data.forEach((week) => {
        const li = document.createElement('li');
        li.textContent = `${week.week}: `;
        week.links.forEach((activity) => {
            const a = document.createElement('a')
            a.setAttribute('href', activity.url)
            a.setAttribute('target', '_blank')
            let textCont = `${activity.tittle}`
            const lastIndex = week.links.length - 1;
            if(week.links.indexOf(activity) != lastIndex) {
                textCont = textCont + '|'
            }
            a.textContent = textCont
            li.appendChild(a)
        })
        ul.appendChild(li)
    })
}