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

function showspoth(data){
    let spotwrapper = document.querySelector('#spotwrap')
    data.forEach(member => {
        let memberdiv = document.createElement('div');
        memberdiv.classList.add('spotmember')

        let img = document.createElement('img');
        img.setAttribute('src', 'https://estoquin.github.io/wdd230/chamber/images/' + member.image)
        img.setAttribute('alt', member.name)
        img.classList.add('spotimg')

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
        memberdiv.appendChild(img)
        memberdiv.appendChild(pdescription);
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