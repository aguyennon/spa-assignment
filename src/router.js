import renderHome from './components/home.js';
import renderAbout from './components/about.js';
import renderProducts from './components/products.js';

const routes = {
  '/': renderHome,
  '/home': renderHome,
  '/about': renderAbout,
  '/products': renderProducts,
};

function handleRoute() {
  const path = window.location.pathname;
  const route = routes[path] || routes['/']; // Fallback to home
  route();
}

// Handle navigation (e.g., from links)
function navigate(path) {
  window.history.pushState({}, '', path);
  handleRoute();
}

// Initialize router
window.addEventListener('popstate', handleRoute); // Back/forward buttons
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigate(e.target.getAttribute('href'));
    }
  });
  handleRoute(); // Load initial route
});

export { navigate };