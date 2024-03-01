let currentYear = new Date().getFullYear();
document.querySelector('#year').innerHTML=currentYear;

let lastModificatedDate = document.lastModified;
document.querySelector('#lastModified').innerHTML=`Last Modification ${lastModificatedDate}`;