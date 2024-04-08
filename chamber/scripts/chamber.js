const addbanner = document.querySelector('#addbanner');
const currentDate = new Date();
const currentDay = currentDate.getDay();

// Fix this to finish debug
let showdebug = true
if ((currentDay >= 1 && currentDay <= 3) || (showdebug)) {
    addbanner.classList.add('addbanner-display');
    addbanner.classList.remove('addbanner-hide');
} else {
    addbanner.classList.add('addbanner-hide');
    addbanner.classList.remove('addbanner-display');
}

/* JSON */
/* JSON */
/* JSON */
/* JSON */

function showspoth(data){
    let spotwrapper = document.querySelector('#spotwrap')
    data.forEach(member => {
        let memberdiv = document.createElement('div');
        memberdiv.classList.add('spotmember')

        // let img = document.createElement('img');
        // img.setAttribute('src', 'https://estoquin.github.io/wdd230/chamber/images/' + member.image)
        // img.setAttribute('alt', member.name)
        // img.classList.add('spotimg')

        let paddress = document.createElement('p');
        paddress.innerHTML = member.address;
        let pnumber = document.createElement('p');
        pnumber.innerHTML = member.phone;
        let alink = document.createElement('a');
        alink.setAttribute('href', member.website);
        alink.setAttribute('target', '_blank');
        alink.innerHTML = member.website;

        let ptitle = document.createElement('p');
        ptitle.innerHTML = member.name.toUpperCase();
        ptitle.classList.add('spottittle');
        if(member.membership_level == 'Gold') {
            ptitle.classList.add('spotgold')
        }
        if(member.membership_level == 'Silver'){
            ptitle.classList.add('spotsilver')
        }

        let pdescription = document.createElement('p');
        pdescription.innerHTML = member.description;
        pdescription.classList.add('spotdescription')

        memberdiv.appendChild(ptitle);
        // memberdiv.appendChild(img)
        memberdiv.appendChild(pdescription);
        memberdiv.appendChild(paddress);
        memberdiv.appendChild(pnumber);
        memberdiv.appendChild(alink);
        spotwrapper.appendChild(memberdiv)
    });
}

function selectmembers(data) {
    const shuffledList = data.sort(() => Math.random() - 0.5);
    showspoth(shuffledList.slice(0, 2))
}

async function getjson() {
    fetch('https://estoquin.github.io/wdd230/chamber/data/members.json')
    .then(data => {return data.json()})
    .then(data => {
        selectmembers(data['members'].filter(item => item['membership_level'] === 'Silver' || item['membership_level']==='Gold'))
    })
}

getjson()

/**
 * Weather
 * 
 * San Miguel de Tucuman
 * -26.820886508664536, -65.22088207323375
 */

// https://openweathermap.org/current
// https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={apiKey}

const currentTepm = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');


const apiKey = 'd3e804200caa48086711fbdd84b6c976';
const latitude = -26.82;
const longitude = -65.22;
const baseurl = 'https://api.openweathermap.org/data/2.5'
const callw = async () => {
    fetch(baseurl + `/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      display(data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

const callforecast = async () => {
    fetch(baseurl + `/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(data => { return data.json()})
    .then(data => { 
        displayForecast(data)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
      });
}

function display(data){
    const figure = document.querySelector('#weather-icon-figure');
    const weatherIcon = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTepm.innerHTML = `${desc} - ${data.main.temp}&deg;F `;
    figure.appendChild(weatherIcon);
}

function displayForecast(data){
    let forecastdiv = document.querySelector('#forecast')
    for (var i = 0; i < 3; i++) {
        let forecastitem = document.createElement('div')
        forecastitem.classList.add('forecastitem')
        let pdate = document.createElement('p');
        pdate.innerHTML = data.list[i].dt_txt.split(' ')[0]
        let phour = document.createElement('p');
        phour.innerHTML = data.list[i].dt_txt.split(' ')[1]
        let ptemp = document.createElement('p');
        ptemp.innerHTML = data.list[i].main.temp + '&deg;F';
        forecastitem.appendChild(pdate)
        forecastitem.appendChild(phour)
        forecastitem.appendChild(ptemp)
        forecastdiv.appendChild(forecastitem);
    }
}

callw()
callforecast()