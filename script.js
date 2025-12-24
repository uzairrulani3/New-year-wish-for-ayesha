window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const container = document.querySelector(".container");

  if (!music || !container) return;

  // 🌟 Start floating stars immediately
  startSparkles();

  function startMusic() {
    music.currentTime = 23;
    music.play();
    localStorage.setItem("musicPlaying", "true");

    // activate visual magic
    container.classList.add("magic-active");

    // start love rain
    loveRain();
  }

  window.startMusic = startMusic;

  // Save music position
  window.addEventListener("beforeunload", () => {
    if (!music.paused) {
      localStorage.setItem("musicTime", music.currentTime);
    }
  });

  // Resume music on page load
  if (localStorage.getItem("musicPlaying") === "true") {
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) music.currentTime = savedTime;
    music.play();
    container.classList.add("magic-active");
  }
});

// 💖 Love rain effect
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

// 🌟 Floating sparkle stars (always on)
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

// 🎬 Inject animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes fallLove {
  to { transform: translateY(120vh); }
}
@keyframes floatStar {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}
`;
document.head.appendChild(style);
