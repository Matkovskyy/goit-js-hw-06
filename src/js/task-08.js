const form = document.querySelector('.login-form');
form.addEventListener('submit', clickFormSubmit);
function clickFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget; 
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    !email || !password
		? alert('All fields should be fill out')
		: console.log({ email: password });

	event.currentTarget.reset();
};

