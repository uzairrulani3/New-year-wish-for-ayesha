const music = document.getElementById("bgMusic");

function playMusic() {
  music.currentTime = 23;
  music.play();
  localStorage.setItem("musicPlaying", "true");
}

window.addEventListener("beforeunload", () => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("musicPlaying") === "true") {
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) music.currentTime = savedTime;
    music.play();
  }
});

// Sparkle effect
for(let i=0;i<25;i++){
  let spark = document.createElement("div");
  spark.innerHTML = "✨";
  spark.style.position = "fixed";
  spark.style.top = Math.random()*100 + "vh";
  spark.style.left = Math.random()*100 + "vw";
  spark.style.fontSize = Math.random()*18 + 12 + "px";
  spark.style.opacity = Math.random();
  spark.style.pointerEvents = "none";
  spark.style.animation = "float " + (Math.random()*5+5) + "s linear infinite";
  document.body.appendChild(spark);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-120vh); }
}
`;
document.head.appendChild(style);
