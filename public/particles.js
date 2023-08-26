// Generate particles
function createParticleAnimation() {
  const particleContainer = document.getElementById("particle-container");
  
  for (let i = 0; i < 1000; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particleContainer.appendChild(particle);
  }
  
  // Animate particles
  const particles = document.querySelectorAll(".particle");
  
  particles.forEach(particle => {
    animateParticle(particle);
  });
  
  function animateParticle(particle) {
    const duration = Math.random() * 3 + 1;
    const delay = Math.random() * 3;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
  
    particle.style.left = startX + "px";
    particle.style.top = startY + "px";
  
    particle.style.animation = `moveParticle ${duration}s ${delay}s infinite linear`;
  }
  }
 // Load particle animation on each page
window.addEventListener("DOMContentLoaded", () => {
  createParticleAnimation();
});