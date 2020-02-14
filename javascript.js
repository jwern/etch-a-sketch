let outerContainer = document.querySelector('.container');
drawGrid();

function drawGrid(userSelection) {
    let defaultGridSize = 16;
    let gridSize = userSelection ** 2 || defaultGridSize ** 2;

    outerContainer.style.gridTemplateColumns = `repeat(${userSelection || defaultGridSize}, 1fr)`;
    outerContainer.style.gridTemplateRows = `repeat(${userSelection || defaultGridSize}, 1fr)`;

    for (let i = 1; i <= gridSize; i++) {
        outerContainer.appendChild(document.createElement("div"));
    }

    addColorChange();
}

function addColorChange() {
    outerContainer.addEventListener("mouseover", hoverOver);

    function hoverOver(event) {
        if (event.target !== outerContainer) {
            event.target.style.backgroundColor = `rgba(0, 0, 0, ${getAlpha(event.target)}`;
        }
    }
}

function getAlpha(element) {
    // regex targeted at numbers with digits taken from this StackOverflow comment
    // https://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color#comment79938383_3752026
    let alphaTag = Number(window.getComputedStyle(element).backgroundColor.match(/[.?\d]+/g)[3]);

    if (alphaTag <= 1) {
        return alphaTag += 0.1;
    }

    return alphaTag;
}

function randomNumber() {
    return Math.floor(Math.random() * (255 + 1));
}

let resetButton = document.querySelector('#reset-sketchbook');
resetButton.addEventListener("click", resetSketchbook);

function resetSketchbook() {
    let gridChildren = getGridChildren();

    for (const child of gridChildren) {
        child.style.backgroundColor = "";
    }

    drawGrid(requestGridSize());
    adjustGridlinesOnReset();
}

function requestGridSize() {
    userSelection = Number(prompt("How many rows would you like the sketchbook to have?"));

    if (typeof userSelection === "number" && userSelection > 0) {
        return userSelection;
    } else {
        requestGridSize();
    } 
}

let gridlineButton = document.querySelector('#display-gridlines');
gridlineButton.addEventListener("click", adjustGridlines);

function adjustGridlines() {
    let gridChildren = getGridChildren();

    if (gridChildren[0].classList.contains("add-gridlines")) {
        for (const child of gridChildren) {
            child.classList.remove("add-gridlines");
        }
    } else {
        for (const child of gridChildren) {
            child.classList.add("add-gridlines");
        }
    }
}

function adjustGridlinesOnReset() {
    let gridChildren = getGridChildren();

    if (gridChildren[0].classList.contains("add-gridlines")) {
        for (const child of gridChildren) {
            child.classList.add("add-gridlines");
        }
    } else {
        for (const child of gridChildren) {
            child.classList.remove("add-gridlines");
        }
    }
}

function getGridChildren() {
    return document.querySelector('.container').children;
}