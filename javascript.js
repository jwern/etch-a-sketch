let outerContainer = document.querySelector('.container');
let gridSize = 256;

for (let i = 1; i <= gridSize; i++) {
    outerContainer.appendChild(document.createElement("div"));
}