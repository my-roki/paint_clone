const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// wall
ctx.fillRect(200, 200, 10, 200);
ctx.fillRect(400, 200, 10, 200);
ctx.fillRect(200, 400, 210, 10);
ctx.fillRect(200, 200, 210, 10);

// door
ctx.beginPath();
ctx.fillRect(300, 300, 50, 100);
ctx.arc(340, 350, 6, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

// roof
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 100);
ctx.lineTo(410, 200);
ctx.fillStyle = "black";
ctx.fill();

// Chimney
ctx.fillRect(340, 100, 50, 100);
