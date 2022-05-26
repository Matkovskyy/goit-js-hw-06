const ulEl = document.querySelector("ul#categories");
const countOfChildren = ulEl.children.length;
console.log(`В списке ${countOfChildren} категории.`);
const categoriesEl = document.querySelectorAll("li.item");
categoriesEl.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Category: ${category.lastElementChild.children.length} `);
})
