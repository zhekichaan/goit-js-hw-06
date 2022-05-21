function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
	colorBtn: document.querySelector(".change-color"),
	colorName: document.querySelector(".color")
}

refs.colorBtn.addEventListener('click', onColorChange);

function onColorChange() {
	document.body.style.backgroundColor = getRandomHexColor();
	refs.colorName.textContent = getRandomHexColor();
}