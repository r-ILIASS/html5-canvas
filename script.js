const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); // Canvas context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;

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

  for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle());
  }
});
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 1; i++) {
    particlesArray.push(new Particle());
  }
});

// Particle blueprint
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 15 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue}, 100%, 50%)`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const handleParticles = () => {
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
    if (particle.size <= 0.3) {
      const index = particlesArray.indexOf(particle);
      particlesArray.splice(index, 1);
    }
  });
};

// animate
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  hue++;
  requestAnimationFrame(animate);
};

animate();
