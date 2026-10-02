// O banner principal é fixo: o único carrossel do site é "Resultados Reais".

// Arrastar os carrosséis horizontais com mouse ou toque.
function makeDraggable(slider) {
  if (!slider) return;

  let down = false;
  let startX = 0;
  let startScroll = 0;

  slider.addEventListener("pointerdown", (event) => {
    // Não iniciar o arraste com o botão principal do mouse diferente do esquerdo.
    if (event.pointerType === "mouse" && event.button !== 0) return;
    down = true;
    startX = event.clientX;
    startScroll = slider.scrollLeft;
    slider.classList.add("dragging");
    if (slider.setPointerCapture) slider.setPointerCapture(event.pointerId);
  });

  slider.addEventListener("pointermove", (event) => {
    if (!down) return;
    slider.scrollLeft = startScroll - (event.clientX - startX);
  });

  const stopDragging = () => {
    down = false;
    slider.classList.remove("dragging");
  };

  slider.addEventListener("pointerup", stopDragging);
  slider.addEventListener("pointercancel", stopDragging);
  slider.addEventListener("lostpointercapture", stopDragging);
}

// Único carrossel de serviços: Resultados Reais.
const resultsTrack = document.getElementById("resultsTrack");
makeDraggable(resultsTrack);

const prevResults = document.getElementById("prevResults");
const nextResults = document.getElementById("nextResults");

if (resultsTrack && prevResults) {
  prevResults.addEventListener("click", () => {
    resultsTrack.scrollBy({ left: -280, behavior: "smooth" });
  });
}
if (resultsTrack && nextResults) {
  nextResults.addEventListener("click", () => {
    resultsTrack.scrollBy({ left: 280, behavior: "smooth" });
  });
}

// As avaliações podem ser deslizadas, mas não são um carrossel automático.
makeDraggable(document.getElementById("reviewSlider"));

// Menu para celular.
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
}
