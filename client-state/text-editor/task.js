let textarea = document.getElementById('editor');
let clearButton = document.getElementById('clear-button');

if (localStorage.textareaContent) {
    let textareaContent = localStorage.textareaContent;
    textarea.value = textareaContent;
}

textarea.addEventListener('input', (e) => {
    localStorage['textareaContent'] = textarea.value;
})

textarea.addEventListener('focus', (e) => {
    if (localStorage.textareaContent) {
        let textareaContent = localStorage.textareaContent;
        textarea.value = textareaContent;
    }
})

clearButton.addEventListener('click', (e) => {
    textarea.value = null;
})
