const gridbutton = document.querySelector('#gridbutton');
const listbutton = document.querySelector('#listbutton');
const article = document.querySelector('#mainarticle');
const baseurl = 'https://estoquin.github.io/wdd230/chamber/images/';

gridbutton.addEventListener('click', () => {
    article.classList.add('directorygrid')
    article.classList.remove('directorylist')
})

listbutton.addEventListener('click', () => {
    article.classList.add('directorylist')
    article.classList.remove('directorygrid')
})

async function readmembers() {
    fetch('./data/members.json')
    .then(data=>{return data.json()})
    .then(data=>{
        displayMembers(data['members'])
    })
}

function displayMembers(members) {
    members.forEach((member) => {
        console.log(member)
        const section = document.createElement('section');
        const div = document.createElement('div');

        const img = document.createElement('img');
        let url = baseurl + member.image;
        img.setAttribute('src', url);
        img.setAttribute('alt', member.name);
        section.appendChild(img);

        const h3 = document.createElement('h3');
        h3.innerHTML = member.name;

        const span = document.createElement('span')
        if(member.membership_level=='Bronze'){
            span.innerHTML = '(Bronze Member)'
            span.classList.add('memberbronze')
        }
        if(member.membership_level=='Silver'){
            span.innerHTML = '(Silver Member)'
            span.classList.add('membersilver')
        }
        if(member.membership_level=='Gold'){
            span.innerHTML = '(Gold Member)'
            span.classList.add('membergold')
        }
        span.classList.add('membershiptag')
        div.appendChild(h3)
        div.appendChild(span)

        const p = document.createElement('p');
        p.innerHTML = member.description;
        div.appendChild(p);

        const pdir = document.createElement('p');
        pdir.innerHTML = member.address;
        div.appendChild(pdir);

        const pp = document.createElement('p');
        pp.innerHTML = member.phone;
        div.appendChild(pp);

        const a = document.createElement('a');
        a.setAttribute('href', member.website)
        a.setAttribute('alt', member.name);
        a.setAttribute('target', '_blank');
        a.innerHTML = "Website";
        div.appendChild(a);

        div.classList.add('directoryiteminfo');
        section.appendChild(div);
        article.appendChild(section);
    })
}

readmembers()