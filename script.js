// Default settings
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#056454';
const DEFAULT_MODE = 'color';
const EMPTY_COLOR = 'rgba(170, 207, 201, 0.3)';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

// Variables
const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSize = document.getElementById('gridSize');
const container = document.getElementById('gridContainer');
const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const rgbMode = document.getElementById('rgbMode');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

makeGrid(currentSize);
setMode(currentMode);

gridSizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
gridSizeSlider.onchange = (e) => changeSize(e.target.value);
colorPicker.oninput = (e) => setColor(e.target.value);

colorMode.addEventListener('click', () => setMode('color'));
rgbMode.addEventListener('click', () => setMode('rgb'));
eraser.addEventListener('click', () => setMode('eraser'));

clear.addEventListener('click', () => reloadGrid());
  

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// FUNCTIONS------------------------------------------------------------

function setMode(mode) {
    currentMode = mode;
    

    if (currentMode === 'color'){
        colorMode.style.backgroundColor = "rgba(170, 207, 201, 0.3)";
        rgbMode.style.backgroundColor = "whitesmoke";
        eraser.style.backgroundColor = "whitesmoke";
    } else if (currentMode === 'rgb'){
        rgbMode.style.backgroundColor = "rgba(170, 207, 201, 0.3)";
        colorMode.style.backgroundColor = "whitesmoke";
        eraser.style.backgroundColor = "whitesmoke";
    } else if (currentMode === 'eraser'){
        eraser.style.backgroundColor = "rgba(170, 207, 201, 0.3)";
        rgbMode.style.backgroundColor = "whitesmoke";
        colorMode.style.backgroundColor = "whitesmoke";
    }
}

function setColor(newColor) {
    currentColor = newColor;
}

function updateSizeValue(value) {
    gridSize.innerHTML = `${value} x ${value}`;
}

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function reloadGrid() {
    clearGrid();
    makeGrid(currentSize);
    document.body.click();
}

function clearGrid() {
    container.innerHTML = '';
}

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size ** 2; i++) {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');
        innerDiv.addEventListener('mouseover', changeColor)
        innerDiv.addEventListener('mousedown', changeColor)
        container.appendChild(innerDiv);
    }

}

function changeColor(e){
    // console.log(e.type);
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rgb') {
        // Randomize color
        currentColor = '#' + (Math.floor(Math.random()*16777215).toString(16));
    } else if (currentMode === 'eraser') {
        currentColor = EMPTY_COLOR;
    } 
    e.target.style.backgroundColor = currentColor;
}
