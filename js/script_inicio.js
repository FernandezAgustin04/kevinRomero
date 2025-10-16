const hamburger = document.getElementById("hamburgerBtn");
const mobilePanel = document.getElementById("mobilePanel");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("closeMobile");

function openMobile() {
mobilePanel.style.display = "block";
setTimeout(() => (mobileMenu.style.transform = "translateX(0)"), 10);
document.body.style.overflow = "hidden";
}

function closeMobile() {
mobileMenu.style.transform = "translateX(100%)";
setTimeout(() => (mobilePanel.style.display = "none"), 300);
document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMobile);
closeBtn.addEventListener("click", closeMobile);

// Cerrar tocando fuera del menú
mobilePanel.addEventListener("click", (e) => {
if (e.target === mobilePanel) closeMobile();
});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") closeMobile();
});

// Opcional: cerrar al hacer click en un enlace
mobileMenu.addEventListener("click", (e) => {
if (e.target.tagName === "A") closeMobile();
});