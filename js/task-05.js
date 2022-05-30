const outputEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input',inputChange)
function inputChange(event){
 outputEl.textContent = event.currentTarget.value
}
function reloadInput(event) {
    
    if (event.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous'
    }
}
 console.log(inputEl.addEventListener('blur', reloadInput))
  
   