const refs = {
	input: document.querySelector('#validation-input'),
}

const inputLength = refs.input.dataset.length;

refs.input.addEventListener('blur', onInputChange);

function onInputChange(event) {
	if(event.currentTarget.value.length == inputLength) {
		refs.input.classList.add("valid");
		refs.input.classList.remove("invalid")
	} 
	else if(event.currentTarget.value.length !== inputLength) {
		refs.input.classList.add("invalid")
		refs.input.classList.remove("valid");
	}
}