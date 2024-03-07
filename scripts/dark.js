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