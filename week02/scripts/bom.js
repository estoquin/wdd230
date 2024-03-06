const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    const deleteButton = document.createElement('button');
    console.log('delete')
    if(input.value != ''){
        const li = document.createElement('li');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
    }
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })
})


