let year = new Date().getFullYear();
let year_string = `©${year}`;
document.querySelector("#year").innerHTML = year_string;
document.querySelector(
  "#lastModified"
).innerHTML = `Last Modified: ${document.lastModified}`;
