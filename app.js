const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
  "#cd84f1",
  "#ffcccc",
  "#ff4d4d",
  "#ffaf40",
  "#fffa65",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
  "#4b4b4b",
];
let pointX = 0;
let pointY = 0;

const handleMove = (event) => {
  ctx.beginPath();
  ctx.moveTo(pointX, pointY);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};

const handleClick = (event) => {
  pointX = event.offsetX;
  pointY = event.offsetY;
};

canvas.addEventListener("mousemove", handleMove);
canvas.addEventListener("click", handleClick);
