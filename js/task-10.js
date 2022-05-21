function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	amountInput: document.querySelector("#controls input"),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	boxes: document.querySelector("#boxes"),
}


refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
	createBoxes(refs.amountInput.value)
}

function onDestroyBtnClick() {
	destroyBoxes()
}

function createBoxes(amount) {
	let boxCollection = [];
	let areaOfBox = 20;
	for(let i = 0; i < amount; i += 1) {
		areaOfBox += 10;

		const box = document.createElement("div");
		boxCollection.push(box);

		box.style.width = `${areaOfBox}px`;
		box.style.height = `${areaOfBox}px`;
		box.style.backgroundColor = getRandomHexColor();
	}
	refs.boxes.append(...boxCollection);
}


function destroyBoxes() {
	refs.boxes.innerHTML = ""
}