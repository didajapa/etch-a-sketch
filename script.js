const container = document.getElementsByClassName('gridContainer');

const slider = document.getElementsByClassName('gridSizeSlider');
const size = document.getElementById('gridSize');
size.innerHTML = slider.value;
console.log(size.innerHTML);

slider.oninput = function(){
    size.innerHTML = this.value;
    console.log(this.value);
}

makeDivs(16);

// Functions
function makeDivs(rowColumnDivs) {
    let numberOfDivs = rowColumnDivs * rowColumnDivs;
    
    for (let i = 0; i < numberOfDivs; i++){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "innerDiv");
    // console.log(newDiv);
    container[0].appendChild(newDiv);
    };
}


