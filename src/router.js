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
  const route = routes[path] || routes['/']; 
  route();
}

// Handle navigation 
function navigate(path) {
  window.history.pushState({}, '', path);
  handleRoute();
}

// Initializing the router
window.addEventListener('popstate', handleRoute); 
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    // Check if the clicked element has the data-link attribute 
    // (Recently learned: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigate(e.target.getAttribute('href'));
    }
  });
  handleRoute(); // Load the initial route
});

export { navigate };