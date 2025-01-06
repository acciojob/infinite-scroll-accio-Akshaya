const list = document.querySelector('#infi-list');


function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${list.children.length + 1}`; // Correct textContent property
        list.appendChild(listItem);
    }
}


addListItems(10);


list.addEventListener('scroll', () => {
    
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addListItems(2); 
    }
});
