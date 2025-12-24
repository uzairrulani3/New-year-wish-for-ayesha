window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const container = document.querySelector(".container");

  if (!music || !container) return;

  function startMusic() {
    music.currentTime = 23;
    music.play();
    localStorage.setItem("musicPlaying", "true");

    // Activate visual magic
    container.classList.add("magic-active");

    // Start love rain
    loveRain();
  }

  window.startMusic = startMusic;

  window.addEventListener("beforeunload", () => {
    if (!music.paused) {
      localStorage.setItem("musicTime", music.currentTime);
    }
  });

  if (localStorage.getItem("musicPlaying") === "true") {
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) music.currentTime = savedTime;
    music.play();
  }
});

// 💖 LOVE RAIN EFFECT
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

// 🎬 Inject Love Animation CSS
const loveStyle = document.createElement("style");
loveStyle.innerHTML = `
@keyframes fallLove {
  to { transform: translateY(120vh); }
}
`;
document.head.appendChild(loveStyle);
