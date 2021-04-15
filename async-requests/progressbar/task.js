let inputForm = document.getElementById('form');

inputForm.addEventListener('submit', (e) => {
    let data = new FormData(inputForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.addEventListener('readystatechange', function(){
        let progress = document.getElementById( 'progress' );
        progress.value += 0.25;
    })
    xhr.send(data);
    e.preventDefault();
})