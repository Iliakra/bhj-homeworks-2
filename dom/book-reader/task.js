let fontSizeControls = document.getElementsByClassName('font-size');
fontSizeControls = [...fontSizeControls];
let bookDiv = document.getElementsByClassName('book')[0];

let changeFontSizeHandler = (e) => {
    e.preventDefault();
    let activeButton = e.target;
    for (let i=0; i<fontSizeControls.length; i++) {
        if (fontSizeControls[i].classList.contains('font-size_active')) {
            fontSizeControls[i].classList.remove('font-size_active');
        }
    }
    activeButton.classList.add('font-size_active');
    
    if (bookDiv.classList.contains('book_fs-small')) {
        bookDiv.classList.remove('book_fs-small');
    } else if (bookDiv.classList.contains('book_fs-big')) {
        bookDiv.classList.remove('book_fs-big');
    }
    if (activeButton.classList.contains('font-size_small')) {
        bookDiv.classList.add('book_fs-small');
    } else if (activeButton.classList.contains('font-size_big')) {
        bookDiv.classList.add('book_fs-big');
    }
}

for (let i=0; i<fontSizeControls.length; i++) {
    fontSizeControls[i].addEventListener('click', changeFontSizeHandler);
}