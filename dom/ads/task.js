let rotators = document.getElementsByClassName('rotator__case');
rotators = [...rotators];
let i=0;
let rotatorCaseActivate = () => {
    if (i === 0 && rotators[rotators.length-1].classList.contains('rotator__case_active')) {
        rotators[rotators.length-1].classList.remove('rotator__case_active');
        rotators[0].classList.add('rotator__case_active');
        i++;
    } else if (i > 0 && i < rotators.length-1) {
        rotators[i-1].classList.remove('rotator__case_active');
        rotators[i].classList.add('rotator__case_active');
        i++;
    } else if (i === rotators.length-1) {
        rotators[i-1].classList.remove('rotator__case_active');
        rotators[i].classList.add('rotator__case_active');
        i = 0;
    } else {
        rotators[i].classList.add('rotator__case_active');
        i++;
    }
    
}

let timerId = setInterval(rotatorCaseActivate, 1000);