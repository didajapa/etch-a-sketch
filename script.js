const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

const gridSizeSlider = document.getElementById('gridSizeSlider');
const gridSize = document.getElementById('gridSize');
const container = document.getElementById('gridContainer');


// gridSizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
gridSizeSlider.onchange = (e) => changeSize(e.target.value);



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
    console.log(currentSize);
    container.innerHTML = '';
}

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');
        // innerDiv.addEventListener('mouseover')
        container.appendChild(innerDiv);
    }
    gridSize.innerHTML = `${size} x ${size}`;


}

window.onload = () => {
    makeGrid(DEFAULT_SIZE);
}
