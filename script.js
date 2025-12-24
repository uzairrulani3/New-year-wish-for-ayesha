window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const container = document.querySelector(".container");

  if (!music || !container) return;

  // 🎵 Start Music + Magic
  function startMusic() {
    music.currentTime = 23;
    music.play();
    localStorage.setItem("musicPlaying", "true");

    // activate visual mood
    container.classList.add("magic-active");

    // start love rain
    loveRain();
  }

  window.startMusic = startMusic;

  // save playback position
  window.addEventListener("beforeunload", () => {
    if (!music.paused) {
      localStorage.setItem("musicTime", music.currentTime);
    }
  });

  // resume music if already started
  if (localStorage.getItem("musicPlaying") === "true") {
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) music.currentTime = savedTime;
    music.play();
  }

  // 🌟 start ambient stars immediately
  startSparkles();
});

// 💖 Love Rain
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

// 🌟 Ambient Sparkles (always on)
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
const effectsStyle = document.createElement("style");
effectsStyle.innerHTML = `
@keyframes fallLove {
  to { transform: translateY(120vh); }
}
@keyframes floatStar {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}
`;
document.head.appendChild(effectsStyle);
