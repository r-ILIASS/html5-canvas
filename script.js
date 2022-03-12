const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // Canvas context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Mouse coordinates state
const mouse = {
  x: null,
  y: null,
};
canvas.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Particle blueprint
class Particle {
  constructor() {
    // this.x = mouse.x;
    // this.y = mouse.y;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    ctx.fillStyle = "cyan";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.fill();
  }
}

const handleParticles = () => {
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });
};

// create a 100 particles
const init = () => {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
};
init();

// animate
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
};

animate();
