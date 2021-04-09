let revealElementAppear = (e) => {
    let revealElements = document.getElementsByClassName('reveal');
    revealElements = [...revealElements];
    let winHeight = window.innerHeight;
    for (let i=0; i<revealElements.length; i++) {
        let topRevealCoords = revealElements[i].getBoundingClientRect().top;
        if (topRevealCoords < winHeight && topRevealCoords > 0) {
            revealElements[i].classList.add('reveal_active');
        } else {
            if (revealElements[i].classList.contains('reveal_active')) {
                revealElements[i].classList.remove('reveal_active');
            }
        }
    }
}

window.addEventListener('scroll', revealElementAppear);