const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

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
  
   