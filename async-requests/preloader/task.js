let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', function() {
    if (this.readyState === 4 && this.status === 200) {
        let loaderImg = document.getElementsByClassName('loader')[0];
        loaderImg.classList.remove('loader_active');
        let data = JSON.parse(this.responseText);
        let valutes = data.response.Valute;
        //console.log(valutes);
        for (let key in valutes) {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            let outputDiv = `<div class="item__code">${valutes[key].CharCode}</div>
                             <div class="item__value">${valutes[key].Value}</div>
                             <div class="item__currency">руб.</div>`
            itemDiv.innerHTML = outputDiv;
            items.appendChild(itemDiv);
        }
    }
});
xhr.send();