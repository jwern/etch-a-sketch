let outerContainer = document.querySelector('.container');
let gridSize = 256;

for (let i = 1; i <= gridSize; i++) {
    outerContainer.appendChild(document.createElement("div"));
}

let gridChildren = document.querySelector('.container').children;
console.log(gridChildren);

for (const child of gridChildren) {
    child.addEventListener("mouseover", hoverOver);
}

function hoverOver(event) {
    event.target.classList.add('hover-change');
}