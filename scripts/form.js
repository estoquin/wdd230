const p1 = document.querySelector('#pass');
const p2 = document.querySelector('#rpass');
const passinfo = document.querySelector('#passinfo');

console.log('form script')

function checkpassword() {
    if(p1.value!==p2.value) {
        p1.value=""
        p2.value=""
        p1.focus();
        passinfo.textContent="Password does not match, try again"
    } else {
        passinfo.textContent=""
    }
}

p2.addEventListener('focusout', checkpassword)


// Range
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
