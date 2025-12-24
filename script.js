function startSparkles() {
  for (let i = 0; i < 35; i++) {
    const star = document.createElement("div");
    star.innerText = "✨";
    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = Math.random() * 12 + 10 + "px";
    star.style.opacity = Math.random();
    star.style.pointerEvents = "none";
    star.style.animation = "floatStar " + (Math.random() * 5 + 6) + "s linear infinite";
    document.body.appendChild(star);
  }
}

function loveRain() {
  for (let i = 0; i < 40; i++) {
    const love = document.createElement("div");
    love.innerText = "I love you ❤️❤️";
    love.style.position = "fixed";
    love.style.left = Math.random() * 100 + "vw";
    love.style.top = "-10vh";
    love.style.fontSize = "1rem";
    love.style.opacity = Math.random();
    love.style.pointerEvents = "none";
    love.style.animation = "fallLove " + (Math.random() * 3 + 4) + "s linear infinite";
    document.body.appendChild(love);
  }
}

function activateMagic() {
  const container = document.querySelector(".container");
  if (container) container.classList.add("magic-active");
  startSparkles();
  loveRain();
}

// Listen for Start button from player.html
window.addEventListener("message", (e) => {
  if (e.data === "startMagic") activateMagic();
});

// Animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes fallLove { to { transform: translateY(120vh); } }
@keyframes floatStar { from { transform: translateY(0); } to { transform: translateY(-120vh); } }
`;
document.head.appendChild(style);
