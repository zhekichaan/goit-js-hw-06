const refs = {
	input: document.querySelector('#name-input'),
	name: document.querySelector('#name-output'),
}

console.dir(refs.input)

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
	if(refs.input.value !== "") {
		refs.name.textContent = event.currentTarget.value;
	} else {
		refs.name.textContent = "Anonymous"
	}
}

