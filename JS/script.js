// ELEMENTI UTILI

const cellsContainer = document.getElementById("box-target");
const gridButton = document.getElementById("grid-button");
let totalCells = 10 * 10;

// CREAZIONE ARRAY

function generateArray(totalCells) {
    let whitelist = [];
    for (let i = 1; i <= totalCells; i++) {
        whitelist.push(i);
    }
    return whitelist;
};

// CREAZIONE GRIGLIA

function generateGrid(totalCells, cellsContainer, whitelist) {
    cellsContainer.innerHTML = "";

    while(whitelist.length){
        const randomIndex = Math.floor(Math.random() * whitelist.length);
        const randomValue = whitelist[randomIndex];
        whitelist.splice(randomIndex, 1);
        createCell(cellsContainer, randomValue);
    };
};

// CREAZIONE CELLA

function createCell(cellsContainer, i) {

    const myCell = document.createElement("div");
    // myCell.innerText = index;
    myCell.setAttribute("data-index", i)
    myCell.classList.add("classic-box");

// EVENT LISTENER CELLA

    myCell.addEventListener("click", () => {
        const index = parseInt(myCell.getAttribute("data-index"));
        myCell.innerText = index;
        myCell.classList.add(index % 2 == 0 ? "background-even" : "background-odd");
        console.log("Hai cliccato il numero " + i);
    });

    cellsContainer.append(myCell);
    return myCell;
};

// WHITELIST ON LOAD

const whitelist = generateArray(totalCells);

// GRIGLIA ON LOAD

generateGrid(totalCells, cellsContainer, whitelist);

// GRIGLIA + WHITELIST ON CLICK

gridButton.addEventListener("click", () => {
    const whitelist = generateArray(totalCells);
    generateGrid(totalCells, cellsContainer, whitelist);
});
