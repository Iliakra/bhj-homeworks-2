let modal = document.getElementById('subscribe-modal');
let close_button = document.getElementsByClassName('modal__close_times')[0];

console.log(document.cookie);

const value="; " + document.cookie;
let parts = value.split("; closed=");
if(parts.length !== 2) {
    modal.classList.add('modal_active');
}


close_button.addEventListener('click', function () {
    event.preventDefault();
    modal.classList.remove('modal_active');
    document.cookie = "closed=true";
})