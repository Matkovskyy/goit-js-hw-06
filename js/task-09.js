const changeColorBtn = document.querySelector('.change-color');
const bodyRef = document.querySelector('body')
const valueColor = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeColor)
function changeColor() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  valueColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
