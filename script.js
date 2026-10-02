// Carrossel principal
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

showSlide(0);

// Carrossel de resultados: botões + arrastar no mouse/touch.
function makeDraggable(slider) {
  let down = false, startX = 0, startScroll = 0;
  slider.addEventListener("pointerdown", e => {
    down = true;
    slider.classList.add("dragging");
    startX = e.clientX;
    startScroll = slider.scrollLeft;
    slider.setPointerCapture(e.pointerId);
  });
  slider.addEventListener("pointermove", e => {
    if (!down) return;
    slider.scrollLeft = startScroll - (e.clientX - startX);
  });
  const stop = () => { down = false; slider.classList.remove("dragging"); };
  slider.addEventListener("pointerup", stop);
  slider.addEventListener("pointercancel", stop);
  slider.addEventListener("lostpointercapture", stop);
}
const resultsTrack = document.getElementById("resultsTrack");
makeDraggable(resultsTrack);

document.getElementById("prevResults").onclick = () => resultsTrack.scrollBy({left:-250, behavior:"smooth"});
document.getElementById("nextResults").onclick = () => resultsTrack.scrollBy({left:250, behavior:"smooth"});

// Avaliações também podem ser arrastadas no celular.
makeDraggable(document.getElementById("reviewSlider"));

// Menu mobile
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
menuButton.addEventListener("click", () => mobileNav.classList.toggle("open"));
document.querySelectorAll(".mobile-nav a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

// Auto-play discreto no hero
setInterval(() => showHero(heroIndex + 1), 6500);
