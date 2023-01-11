const container = document.getElementsByClassName('gridContainer');

// function makeGrid(rows, cols) {
//     // container.style.setProperty("--grid-rows", rows);
//     // container.style.setProperty("--grid-cols", cols);
//     for (i = 0; 1 < (rows * cols); i++) {
//         let newDiv = document.createElement("div");
//         newDiv.innerText = (i + 1);
//         // newDiv.setAttribute("class", "innerDiv"); 
//         container[0].appendChild(newDiv).className = "innerDiv";
//     };
// };

// makeGrid(16, 16);


makeDivs(16*16);

function makeDivs(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++){
    const newDiv = document.createElement("div");
    // newDiv.innerText = (i + 1);
    newDiv.setAttribute("class", "innerDiv");
    console.log(newDiv);
    container[0].appendChild(newDiv);
    };
}


