let dropDownButtonArray = document.getElementsByClassName('dropdown__value');
let dropDownListItemArray = document.getElementsByClassName('dropdown__item');
let dropDownListItemLinkArray = document.getElementsByClassName('dropdown__link');


function dropDownListHandler(e) {
    let targetElement = e.target;
    let dropDownList = targetElement.closest('.dropdown').children[1];
    dropDownList.classList.add('dropdown__list_active');
}

function listItemClickHandler(e) {
    e.preventDefault();
    let targetElement = e.target;
    let text = targetElement.textContent;
    let dropDownCurrentButton = targetElement.closest('.dropdown').children[0];
    let dropDownList = targetElement.closest('.dropdown').children[1];
    dropDownCurrentButton.textContent = text;
    dropDownList.classList.remove('dropdown__list_active');
}



for (let i=0; i<dropDownButtonArray.length; i++) {
    dropDownButtonArray[i].addEventListener('click', dropDownListHandler);
}

for (let i=0; i<dropDownListItemLinkArray.length; i++) {
    dropDownListItemLinkArray[i].addEventListener('click', listItemClickHandler);
}