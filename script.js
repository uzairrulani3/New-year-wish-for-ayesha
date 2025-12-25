function applyGlow() {
  const container = document.querySelector(".container");
  if (container) container.classList.add("magic-active");
}

window.addEventListener("message", (e) => {
  if (e.data === "applyGlow") applyGlow();
});
