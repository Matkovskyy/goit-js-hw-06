const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayEl = ingredients.map(ingredient => {
  const elLi = document.createElement('li');
  elLi.textContent = ingredient;
  elLi.classList.add('item');
  return elLi;
});
// arrayEL.append(elLi);
console.log(arrayEl);




