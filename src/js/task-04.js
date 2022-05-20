let counterValue = document.querySelector('#value');
let valueEl = Number(document.querySelector('#value').textContent);
const decrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;
decrementBtn.addEventListener('click', event => {
    valueEl -= 1;
    console.log(valueEl);
});
incrementBtn.addEventListener('click', event => {
    valueEl += 1;
    console.log(valueEl);
});
