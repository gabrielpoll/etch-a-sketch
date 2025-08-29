getQuantityButton = document.querySelector(".quantity-button");
getSketchContainer = document.querySelector(".sketch-container");
getSketchScreen = document.querySelector(".sketch-screen");

function makeGrids(size) {
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";

            row.addEventListener("mouseover", function(e) {
                row.style.backgroundColor = "blue";
            });

            column.appendChild(row);
        }
        getSketchScreen.appendChild(column)
    }
}

getQuantityButton.addEventListener("click", function(e) {
    let getQuantitySquares = prompt("How many squares do you want?");
    while (getQuantitySquares > 100) {
        alert("No more than 100!");
        getQuantitySquares = prompt("How many squares do you want?");
    };
    makeGrids(getQuantitySquares);
});
