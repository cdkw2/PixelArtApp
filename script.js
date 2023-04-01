const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const clearButton = document.getElementById('clear-button');
const saveButton = document.getElementById('save-button');
const pixelSizeInput = document.getElementById('pixel-size-input');
const canvasWidthInput = document.getElementById('canvas-width-input');
const canvasHeightInput = document.getElementById('canvas-height-input');
const eraserButton = document.getElementById('eraser-button');

let pixelSize = parseInt(pixelSizeInput.value);
let canvasWidth = parseInt(canvasWidthInput.value);
let canvasHeight = parseInt(canvasHeightInput.value);
let isDrawing = false;
let isErasing = false;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

function drawPixel(x, y) {
  if (isErasing) {
    context.clearRect(x, y, pixelSize, pixelSize);
  } else {
    context.fillRect(x, y, pixelSize, pixelSize);
  }
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
  const dataUrl = canvas.toDataURL();
  const link = document.createElement('a');
  link.download = 'pixel-art.png';
  link.href = dataUrl;
  link.click();
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  drawPixel(Math.floor(event.offsetX / pixelSize) * pixelSize, Math.floor(event.offsetY / pixelSize) * pixelSize);
});

canvas.addEventListener('mousemove', (event) => {
  if (isDrawing) {
    drawPixel(Math.floor(event.offsetX / pixelSize) * pixelSize, Math.floor(event.offsetY / pixelSize) * pixelSize);
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

clearButton.addEventListener('click', () => {
  clearCanvas();
});

saveButton.addEventListener('click', () => {
  saveCanvas();
});

pixelSizeInput.addEventListener('input', () => {
  pixelSize = parseInt(pixelSizeInput.value);
});

canvasWidthInput.addEventListener('input', () => {
  canvasWidth = parseInt(canvasWidthInput.value);
  canvas.width = canvasWidth;
});

canvasHeightInput.addEventListener('input', () => {
  canvasHeight = parseInt(canvasHeightInput.value);
  canvas.height = canvasHeight;
});

eraserButton.addEventListener('click', () => {
  isErasing = !isErasing;
  if (isErasing) {
    eraserButton.innerText = 'Draw';
  } else {
    eraserButton.innerText = 'Erase';
  }
});
