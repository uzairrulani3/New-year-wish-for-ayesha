window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  if (!music) return;

  function startMusic() {
  music.currentTime = 23;
  music.play();
  localStorage.setItem("musicPlaying", "true");
  document.body.classList.add("magic-active");
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

.magic-active {
  filter: brightness(1.05) saturate(1.15) contrast(1.05);
  transition: filter 1s ease;
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

const loveStyle = document.createElement("style");
loveStyle.innerHTML = `
@keyframes fallLove {
  to { transform: translateY(120vh); }
}
`;
document.head.appendChild(loveStyle);
