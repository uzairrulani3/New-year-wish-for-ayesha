const effectsLayer = document.getElementById("global-effects");

let starsStarted = false;
let rainTimer = null;

function startStars() {
  if (starsStarted) return;
  starsStarted = true;

  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerText = "✨";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = Math.random() * 12 + 10 + "px";
    star.style.opacity = Math.random();
    star.style.animation = "floatStar " + (Math.random() * 6 + 6) + "s linear infinite";
    effectsLayer.appendChild(star);
  }
}

function dropLove() {
  const love = document.createElement("div");
  love.className = "love";
  love.innerText = "I love you ❤️❤️";
  love.style.left = Math.random() * 100 + "vw";
  love.style.top = "-10vh";
  love.style.fontSize = "1rem";
  love.style.opacity = Math.random();
  love.style.animation = "fallLove 6s linear";
  effectsLayer.appendChild(love);

  setTimeout(() => love.remove(), 6000);
}

function startLoveRain() {
  if (rainTimer) return;
  dropLove();
  rainTimer = setInterval(dropLove, 500);
}

window.addEventListener("message", e => {
  if (e.data === "startMagic") {
    startStars();
    startLoveRain();
  }
});
