// Default settings
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#056454';
const DEFAULT_MODE = 'one'

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

// Variables
const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSize = document.getElementById('gridSize');
const container = document.getElementById('gridContainer');


gridSizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
gridSizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// FUNCTIONS------------------------------------------------------------



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
}

function clearGrid() {
    // console.log(currentSize);
    container.innerHTML = '';
}

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');
        innerDiv.addEventListener('mouseover', changeColor)
        innerDiv.addEventListener('mousedown', changeColor)
        container.appendChild(innerDiv);
    }
    gridSize.innerHTML = `${size} x ${size}`;


}

function changeColor(e){
    // console.log(e.type);
    if (e.type === 'mouseover' && !mouseDown) return
}

window.onload = () => {
    makeGrid(DEFAULT_SIZE);
}
