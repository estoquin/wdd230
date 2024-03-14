const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templetext = document.querySelector('#templetext')

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');	
	templetext.classList.toggle('herotempletextmobile')
});