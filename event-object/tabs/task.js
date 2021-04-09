let tabs = document.getElementsByClassName('tab');
tabs = [...tabs];
let tab_contents = document.getElementsByClassName('tab__content');
tab_contents = [...tab_contents];


let tabActivate = (e) => {
    let tabActiveElement = document.getElementsByClassName('tab_active')[0];
    let tabContentActiveElement = document.getElementsByClassName('tab__content_active')[0];
    tabActiveElement.classList.remove('tab_active');
    tabContentActiveElement.classList.remove('tab__content_active');
    let activeTabElement = e.target;
    activeTabElement.classList.add('tab_active');
    let activeElementIndex = tabs.indexOf(activeTabElement);
    tab_contents[activeElementIndex].classList.add('tab__content_active');
}

for (let i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', tabActivate);
}