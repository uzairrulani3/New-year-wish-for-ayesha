window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  if (!music) return;

  function startMusic() {
    music.currentTime = 23;
    music.play();
    localStorage.setItem("musicPlaying", "true");
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
