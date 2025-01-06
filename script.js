//your code here!
const list = document.querySelector('#infi-list');

function addListItems(count){
	for(i=0;i<count;i++){
		const listItem = document.createElement('li');
		listItem.textcontent =`Item ${list.children.length+1}`;
		list.appendChild(listItem);
	}
}
addListItems(10);

window.addEventListener('scroll',() =>{
	if(window.innerHeight+window.scrollY >=document.documentElement.offsetHeight){
		addListItems(2);
	}
});

