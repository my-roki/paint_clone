// TODO : fill upgrade. not background, real paint inner line.
// TODO : eraser
// TODO : various shape drawing (ex. rectangilar, line etc..)
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");
const colors = document.getElementsByClassName("controls__color");
const mode = document.getElementById("jsMode");
const clearAll = document.getElementById("jsReset");
const body = document.getElementsByTagName("body");
const save = document.getElementById("jsSave");

let painting = false;
let filling = false;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.width);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2;

function startPainting(event) {
  if (event.which != 1) {
    return false;
  } else {
    if (filling === false) {
      painting = true;
    }
  }
}

function stopPainting() {
  painting = false;
}

function handleCanvasClick(event) {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.width);
  }
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseEnter(event) {
  x = event.offsetX;
  y = event.offsetY;
  ctx.moveTo(x, y);
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  range.style.accentColor = color;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleResetClick() {
  window.location.reload();
}

function handleRangeChange(event) {
  const thickness = event.target.value;
  ctx.lineWidth = thickness;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "FILL";
    body[0].style.cursor = "url('./icon/paint.png'), auto";
  } else {
    filling = true;
    mode.innerText = "PAINT";
    body[0].style.cursor = "url('./icon/fill.png'), auto";
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "title";
  link.click();
}

if (canvas) {
  document.body.addEventListener("mouseup", stopPainting);
  document.body.addEventListener("mousedown", startPainting);

  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseenter", onMouseEnter);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
if (clearAll) {
  clearAll.addEventListener("click", handleResetClick);
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
