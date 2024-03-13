const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

/**
 * Functions below
 */

const displayList = (item) => {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

const setChapterList = () => {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

const deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

/**
 * Functions Above
 */

let chaptersArray = getChapterList() || [];

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});