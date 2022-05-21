const refs = {
	form: document.querySelector('.login-form')
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	function validator() {
		for(let i=0; i < event.currentTarget.elements.length - 1; i +=1) {
			if(event.currentTarget.elements[i].value === ""){
				alert("Все поля должны быть заполнены.")
				return false
			}
		}
	}

	if(validator() === false) {
		return
	}

	const email = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;

	const inputData = {
		email: email,
		password: password
	}
	
	console.log(inputData)

	event.currentTarget.reset();
}