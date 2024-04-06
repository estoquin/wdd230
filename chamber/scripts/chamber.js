const addbanner = document.querySelector('#addbanner');
const currentDate = new Date();
const currentDay = currentDate.getDay();

// Fix this to finish debug
let showdebug = true
if ((currentDay >= 1 && currentDay <= 3) || (showdebug)) {
    console.log('Banner should display')
    addbanner.classList.add('addbanner-display');
    addbanner.classList.remove('addbanner-hide');
} else {
    console.log('Banner should NOT display')
    addbanner.classList.add('addbanner-hide');
    addbanner.classList.remove('addbanner-display');
}

/* JSON */
/* JSON */
/* JSON */
/* JSON */


function selectmembers(data) {
    const shuffledList = data.sort(() => Math.random() - 0.5);
    shuffledList.slice(0, 2).forEach(member => {
      console.log(member)  
    })
}

async function getjson() {
    fetch('https://estoquin.github.io/wdd230/chamber/data/members.json')
    .then(data => {return data.json()})
    .then(data => {
        selectmembers(data['members'].filter(item => item['membership_level'] === 'Silver' || item['membership_level']==='Gold'))
    })
}

getjson()