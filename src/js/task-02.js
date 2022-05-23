const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEls = document.querySelector('#ingredients');
const arrayEl = ingredients.map(ingredient => {
  const elLi = document.createElement('li');
  elLi.textContent = ingredient;
  elLi.classList.add('item');
  return elLi;
});

ingredientsEls.append(...arrayEl);




