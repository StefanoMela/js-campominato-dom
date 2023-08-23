/**
// WHITELIST ON LOAD
// const whitelist = generateArray(totalCells);
// GRIGLIA ON LOAD
// generateGrid(totalCells, cellsContainer, whitelist);
*/

// ELEMENTI UTILI

const cellsContainer = document.getElementById("box-target");
const gridButton = document.getElementById("grid-button");
const difficultySelect = document.getElementById("difficulty");
let bombs = [];
let userScore = 0;

// PUNTEGGIO


// CREAZIONE ARRAY GENERALE

function generateArray(from, to, step) {
    let whitelist = [];
    for (let i = from; i <= to; i += step) {
        whitelist.push(i);
    }
    return whitelist;
};

// GRIGLIA + WHITELIST ON CLICK

gridButton.addEventListener("click", () => {
    let totalCells = parseInt(difficultySelect.value);
    const whitelist = generateArray(1, totalCells, 1);
    generateGrid(totalCells, cellsContainer, whitelist);
    bombs = bombsArray(totalCells);
    console.log(bombs);
});

// CREAZIONE GRIGLIA

function generateGrid(totalCells, cellsContainer, whitelist) {
    cellsContainer.innerHTML = "";

    while (whitelist.length) {
        const randomIndex = generateRandomNumber(0, whitelist.length - 1);
        const randomValue = whitelist[randomIndex];
        whitelist.splice(randomIndex, 1);
        createCell(cellsContainer, randomValue, totalCells);
    };
};

// CREAZIONE CELLA

function createCell(cellsContainer, i, totalCells) {

    const myCell = document.createElement("div");
    // myCell.innerText = i;
    myCell.setAttribute("data-index", i)
    myCell.classList.add("cell");
    myCell.classList.add("cell-" + totalCells);


    // EVENT LISTENER CELLA

    myCell.addEventListener("click", () => {
        const index = parseInt(myCell.getAttribute("data-index"));
        myCell.innerText = index;
        myCell.classList.add("background-even");
        console.log("Hai cliccato il numero " + i);
        if (bombs.includes(i)) {
            myCell.classList.add("bomb-bgc");
            alert ("Spiaze, hai perso!" + " il tuo punteggio è: " + userScore);
            cellsContainer.innerHTML = "";
            userScore = 0;
            bombs = [];
        } else if (!bombs.includes(i) && totalCells - bombs != 0){
            userScore++;
        } else {
            alert ("Hai vinto, non è scoppiata nessuna bomba!")
        };
    });

    cellsContainer.append(myCell);
    return myCell;
};

// GENERAZIONE NUMERO RANDOMICO

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
};

// GENERAZIONE ARRAY BOMBE

function bombsArray (max) {
    const bombs = [];
    while (bombs.length < 16) {
      let randomNumber = generateRandomNumber (1, max);

      if (!bombs.includes(randomNumber))
      bombs.push(randomNumber)
    };

    return bombs;
};

function endGame () {};