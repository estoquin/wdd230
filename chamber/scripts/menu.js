// Navigation
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


// Footer
let currentYear = new Date().getFullYear();
document.querySelector('#year').innerHTML=currentYear;
let lastModificatedDate = document.lastModified;
document.querySelector('#lastModified').innerHTML=`Last Modification ${lastModificatedDate}`;