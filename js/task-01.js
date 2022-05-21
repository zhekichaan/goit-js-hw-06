const categories = document.querySelectorAll(".item");

const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

for(let i = 0; i < categories.length; i += 1) {
	const categoryName = categories[i].firstElementChild;
	console.log(`Category: ${categoryName.textContent}`);

	const categoryItem = categories[i].lastElementChild;
	console.log(`Elements: ${categoryItem.children.length}`);
};
