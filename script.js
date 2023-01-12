const container = document.getElementsByClassName('gridContainer');

makeDivs(16);

function makeDivs(rowColumnDivs) {
    let numberOfDivs = rowColumnDivs * rowColumnDivs;
    
    for (let i = 0; i < numberOfDivs; i++){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "innerDiv");
    console.log(newDiv);
    container[0].appendChild(newDiv);
    };
}


