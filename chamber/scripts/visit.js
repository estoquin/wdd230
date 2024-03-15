
const msToDays = 84600000;
let currentVisit = Date.now()
let lastVisit = localStorage.getItem('lastvisit')
localStorage.setItem('lastvisit', currentVisit)
let message = ''
if ((lastVisit==null)||(lastVisit==undefined)){
    message = 'Welcome! Let us know if you have any questions.'
} else {
    let differenceDays = parseInt((parseInt(currentVisit) - parseInt(lastVisit)) / msToDays)
    if(differenceDays == 0) {
        message="Back so soon! Awesome!"
    } else {
        message=`You last visited ${differenceDays} days ago`
    }
}
document.querySelector('#textvisit').innerHTML = message