
let currentVisit = Date.now()
let lastVisit = localStorage.getItem('lastvisit')
localStorage.setItem('lastvisit', currentVisit)
const msToDays = 86400;

// Operation
console.log('Last Visit', parseInt(lastVisit))
console.log('Current Visit: ', parseInt(currentVisit))
let differenceBetweeDaysMiliseconds = parseInt(currentVisit) - parseInt(lastVisit) 
console.log('differenceBetweeDaysMiliseconds: ', differenceBetweeDaysMiliseconds)
let differenceDays = differenceBetweeDaysMiliseconds / msToDays
console.log('Difference in days: ', parseInt(differenceDays))

// Date
let lastVisitDate = new Date(parseInt(lastVisit))
let currentVisitDate = new Date(parseInt(currentVisit))
console.log('Last Visit Date: ', lastVisitDate)
console.log('Current Visit Date: ', currentVisitDate)
