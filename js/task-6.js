const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  function createBoxes(amount) {
    const boxes = [];
    let boxSize = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      boxSize += 10;
    }
  
    boxesContainer.append(...boxes);
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
  
  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
  
    if (amount > 0 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });
  
  destroyBtn.addEventListener('click', destroyBoxes);