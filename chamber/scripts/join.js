const timestamp = document.querySelector('#timestamp')
const joinchamber = document.querySelector('#joinchamber')
joinchamber.addEventListener('click', () => {
    timestamp.value = new Date().toISOString();
})