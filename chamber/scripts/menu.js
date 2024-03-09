const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navlinks');
const navlink = document.querySelectorAll('.navlink');

hamButton.addEventListener('click', () => {
	hamButton.classList.toggle('open');	
	navigation.classList.toggle('navmobile')
	navlink.forEach((nl) => {
		nl.classList.toggle('navlinkmobile')
	})
});