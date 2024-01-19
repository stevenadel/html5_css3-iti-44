const gridWidthInput = document.getElementById('grid-width');
const gridHeightInput = document.getElementById('grid-height');
const colorInput = document.getElementById('color');
const canvas = document.getElementById('pixel-canvas');
const ctx = canvas.getContext('2d');

let gridWidth = parseInt(gridWidthInput.value);
let gridHeight = parseInt(gridHeightInput.value);
let cellWidth, cellHeight;

function initializeCanvas() {
    gridWidth = parseInt(gridWidthInput.value);
    gridHeight = parseInt(gridHeightInput.value);
    cellWidth = canvas.width / gridWidth;
    cellHeight = canvas.height / gridHeight;
    drawGrid();
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            ctx.fillStyle = 'white';
            ctx.fillRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            ctx.strokeStyle = '#ddd';
            ctx.strokeRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
        }
    }
}

function changeColor(e) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / cellWidth);
    const y = Math.floor((e.clientY - rect.top) / cellHeight);

    ctx.fillStyle = colorInput.value;
    ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
}

gridWidthInput.addEventListener('input', initializeCanvas);
gridHeightInput.addEventListener('input', initializeCanvas);
canvas.addEventListener('mousedown', changeColor);

initializeCanvas();
