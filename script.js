const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // Canvas context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Mouse coordinates state
const mouse = {
  x: null,
  y: null,
};

// Draw circle on click
canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  draw(mouse.x, mouse.y);
});

// Paint brush
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  brush(mouse.x, mouse.y);
});

// Basic draw function
const draw = (x, y) => {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.stroke();
};

// Basic brush function
const brush = (x, y) => {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fill();
};
