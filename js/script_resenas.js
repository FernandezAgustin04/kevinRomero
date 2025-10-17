// Constantes
const reviewForm = document.getElementById('reviewForm');
const reviewText = document.getElementById('reviewText');
const clearBtn = document.getElementById('clearReviews');
const reviewsContainer = document.getElementById('reviewsList');
const REVIEWS_KEY = 'reviews';

// Funciones para cargar y guardar reseñas
function loadReviews() {
  const reviews = localStorage.getItem(REVIEWS_KEY);
  return reviews ? JSON.parse(reviews) : [];
}

function saveReviews(reviews) {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
}

// Función para mostrar las reseñas
function renderReviews() {
  const reviews = loadReviews();
  reviewsContainer.innerHTML = ''; // limpia la lista
  reviews.forEach(review => {
    const div = document.createElement('div');
    div.classList.add('review-item');
    div.innerHTML = `
      <p>${review.text}</p>
      <small>⭐ ${review.rating}</small>
      <hr>
    `;
    reviewsContainer.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    // ELEMENTOS
    const hamburger = document.getElementById('hamburgerBtn');
    const mobilePanel = document.getElementById('mobilePanel');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('closeMobile');

    // Función abrir menú
    function openMobile() {
    mobilePanel.style.display = 'block';
    setTimeout(() => mobileMenu.style.transform = 'translateX(0)', 10);
    document.body.style.overflow = 'hidden';
    mobilePanel.setAttribute('aria-hidden', 'false');
    }

    // Función cerrar menú
    function closeMobile() {
    mobileMenu.style.transform = 'translateX(100%)';
    setTimeout(() => {
        mobilePanel.style.display = 'none';
        document.body.style.overflow = 'auto';
        mobilePanel.setAttribute('aria-hidden', 'true');
    }, 300);
    }

    // Eventos
    hamburger.addEventListener('click', openMobile);
    closeBtn.addEventListener('click', closeMobile);

    // Cerrar tocando fuera del panel
    mobilePanel.addEventListener('click', (e) => {
    if (e.target === mobilePanel) closeMobile();
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobile();
    });

    // Cerrar al hacer clic en un enlace
    mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMobile();
    });
});


document.addEventListener('DOMContentLoaded', () => {
  // Cargar reseñas existentes al iniciar
  renderReviews();

  // Manejar envío del formulario
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = reviewText.value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');

    if (!text || !rating) {
      alert('Por favor, escribe una reseña y selecciona una puntuación.');
      return;
    }

    const newReview = { text, rating: rating.value };
    const reviews = loadReviews();
    reviews.push(newReview);
    saveReviews(reviews);
    renderReviews();
    reviewForm.reset();
  });

  // Menú hamburguesa y demás
  const hamburger = document.getElementById('hamburgerBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('closeMobile');

  function openMobile() {
    mobilePanel.style.display = 'block';
    setTimeout(() => mobileMenu.style.transform = 'translateX(0)', 10);
    document.body.style.overflow = 'hidden';
    mobilePanel.setAttribute('aria-hidden', 'false');
  }

  function closeMobile() {
    mobileMenu.style.transform = 'translateX(100%)';
    setTimeout(() => {
      mobilePanel.style.display = 'none';
      document.body.style.overflow = 'auto';
      mobilePanel.setAttribute('aria-hidden', 'true');
    }, 300);
  }

  hamburger.addEventListener('click', openMobile);
  closeBtn.addEventListener('click', closeMobile);
  mobilePanel.addEventListener('click', (e) => {
    if (e.target === mobilePanel) closeMobile();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobile();
  });
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeMobile();
  });
});
