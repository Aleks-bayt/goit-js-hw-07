
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;


button.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};