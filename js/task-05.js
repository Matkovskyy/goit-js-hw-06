const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const inputChange = () => {
	const DEFAULT_NAME = 'Anonymous';
	const { value } = inputEl;

	if (value) { outputEl.textContent = value }
    else { outputEl.textContent = DEFAULT_NAME }       
        	
};

inputEl.addEventListener('input', inputChange);
  
   