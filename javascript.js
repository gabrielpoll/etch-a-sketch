getQuantityButton = document.querySelector(".quantity-button");
getSketchContainer = document.querySelector(".sketch-container");

function randomInt() {
    const min = 0;
    const max = 255;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeGrids(size) {
    const createSketchScreen = document.createElement("div");
    createSketchScreen.classList.add("sketch-screen");
    getSketchContainer.appendChild(createSketchScreen);
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.width = `${600 / size}px`;
            row.style.height = `${600 / size}px`;

            row.addEventListener("mouseover", function(e) {
                row.style.backgroundColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
            });

            column.appendChild(row);
        }
        createSketchScreen.appendChild(column)
    }
}

makeGrids(16);

getQuantityButton.addEventListener("click", function(e) {
    let getQuantitySquares = parseInt(prompt("How many squares do you want?"));
    
    while (getQuantitySquares > 100 || isNaN(getQuantitySquares)) {
        alert("No more than 100!");
        getQuantitySquares = parseInt(prompt("How many squares do you want?"));
    };

    getSketchContainer.innerHTML = "";
    makeGrids(getQuantitySquares);
});
