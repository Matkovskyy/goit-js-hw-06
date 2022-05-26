const outputEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', event => {
    if (event.currentTarget.value === "") {
        outputEl.textContent = "Anonymous";
    }
    console.log(inputEl.textContent);
    outputEl.textContent = event.currentTarget.value;
});
  
   