let formContainer = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let user_id_span = document.getElementById('user_id');
let exit_button = document.getElementsByClassName('exit-button')[0];
let name_input = document.getElementsByName('login')[0];
let password_input = document.getElementsByName('password')[0];

//delete localStorage.user_id;

let userAuthorized = () => {
    welcome.classList.add('welcome_active');
    user_id_span.innerHTML = localStorage.user_id;
    exit_button.classList.add('exit-button_active');
}

if(localStorage.user_id) {
    userAuthorized();
} else {
    formContainer.classList.add('signin_active');
}


let form = document.getElementById('signin__form');

form.addEventListener('submit', () => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', function() {
        if(this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            if (data.success) {
                localStorage.user_id = data.user_id;
                formContainer.classList.remove('signin_active');
                userAuthorized();
            } else {
                alert('Неверный логин/пароль');
            }
        }
    })
    xhr.send(formData);
    name_input.value = null;
    password_input.value = null;
    event.preventDefault();
})

exit_button.addEventListener('click', function() {
    delete localStorage.user_id; 
    welcome.classList.remove('welcome_active');
    exit_button.classList.remove('exit-button_active');
    formContainer.classList.add('signin_active');
})
