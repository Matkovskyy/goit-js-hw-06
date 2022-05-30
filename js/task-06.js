const input = document.querySelector('input');
const inputEl = document.querySelector('#validation-input');
function validation() {
    if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
}
inputEl.addEventListener('blur',validation,)
