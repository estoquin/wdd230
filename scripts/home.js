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