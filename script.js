// Requisito 2 - criação da paleta de cores
for (let index = 0; index < 8; index += 1) {
  const paleta = document.getElementById('color-palette');
  const coresPaleta = document.createElement('div');
  coresPaleta.classList.add('color');
  paleta.appendChild(coresPaleta);
}
function generateRandomColor() {
  // referência : https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}
const paletaCores = document.getElementsByClassName('color');

paletaCores[0].id = 'black';
paletaCores[1].style.backgroundColor = generateRandomColor();
paletaCores[2].style.backgroundColor = generateRandomColor();
paletaCores[3].style.backgroundColor = generateRandomColor();
paletaCores[4].style.backgroundColor = generateRandomColor();
paletaCores[5].style.backgroundColor = generateRandomColor();
paletaCores[6].style.backgroundColor = generateRandomColor();
paletaCores[7].style.backgroundColor = generateRandomColor();

// Requisito 4
function generateMatriz() {
  const matrizIndex = 5;
  const matrixRepeat = `repeat(${matrizIndex},1fr)`;
  const matriz = matrizIndex ** 2;
  const board = document.getElementById('pixel-board');
  board.style.gridTemplateColumns = matrixRepeat;
  for (let index = 0; index < matriz; index += 1) {
    const divs = document.createElement('div');
    divs.classList.add('pixel');
    board.appendChild(divs);
  }
}
generateMatriz();
function generateMatrizUser() {
  let input = document.getElementById('board-size');
  let inputValue = input.value;
  const matrizIndex = inputValue;
  const matrixRepeat = `repeat(${matrizIndex},1fr)`;
  const matriz = matrizIndex ** 2;
  const board = document.getElementById('pixel-board');
  board.style.gridTemplateColumns = matrixRepeat;
  if (input.value < 5) {
    board.style.gridTemplateColumns = 'repeat(5,1fr)';
    for (let index = 0; index < 25; index += 1) {
      const divs = document.createElement('div');
      divs.classList.add('pixel');
      board.appendChild(divs);
    }
  } else if (input.value > 50) {
    board.style.gridTemplateColumns = 'repeat(50,1fr)';
    for (let index = 0; index < 2500; index += 1) {
      const divs = document.createElement('div');
      divs.classList.add('pixel');
      board.appendChild(divs);
    }
  } else {
    for (let index = 0; index < matriz; index += 1) {
      const divs = document.createElement('div');
      divs.classList.add('pixel');
      board.appendChild(divs);
    }
  }
}
// Requisito 6
const blackColor = document.getElementById('black');
blackColor.classList.add('selected');

// Requisito 7

function cores(event) {
  const selected = document.querySelector('.selected');
  if (event.target.className === 'color') {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function selectColor() {
  const paleta = document.getElementById('color-palette');
  paleta.addEventListener('click', cores);
}
selectColor();

// Requisito 8

function selectBackgroundColor(event) {
  if (event.target.className === 'pixel') {
    const selected = document.querySelector('.selected');
    const colorSelected = window
      .getComputedStyle(selected)
      .getPropertyValue('background-color');
    const mudarCor = event.target;
    mudarCor.style.backgroundColor = colorSelected;
  }
}

function paint() {
  const matrizPintar = document.getElementById('pixel-board');
  matrizPintar.addEventListener('mousedown', selectBackgroundColor);
  // PQ NÃO FUNCIONA SO SELECIONANDO CADA PIXEL?
  //   const cadaPixel = document.querySelector('.pixel');
  //   for (let index = 0; index < cadaPixel.length; index += 1) {
  //     cadaPixel.addEventListener('mouseover', selectBackgroundColor);
  //   }
  // }
}
paint();

// Requisito 9

function resetMatriz() {
  const button = document.getElementById('clear-board');
  const pixels = document.getElementsByClassName('pixel');
  button.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
resetMatriz();

// Requisito 10
function createMatriz() {
  const input = document.getElementById('board-size');
  const parent = document.getElementById('pixel-board');

  parent.innerText = '';
  if (input.value === '') {
    alert('Board inválido!');
    generateMatriz();
  } else {
    generateMatrizUser();
  }
}
function clickButton() {
  const button = document.getElementById('generate-board');
  button.addEventListener('click', createMatriz);
}
clickButton();
