const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients")
console.log(ingredientsListEl)

const ingredientsItemEl = ingredients.map(ingredient => {
	const ingredientItem = document.createElement("li");
	ingredientItem.classList.add("item")
	ingredientItem.textContent = ingredient;
	return ingredientItem;
})

ingredientsListEl.append(...ingredientsItemEl)


