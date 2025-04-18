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


function navigate(path) {
  window.history.pushState({}, '', path);
  handleRoute();
}

window.addEventListener('popstate', handleRoute);
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    // Check if the clicked element is a link with data-link attribute
    // (recently learned: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
    // What e.target.matches is doing: it checks if the clicked element matches the selector '[data-link]'
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigate(e.target.getAttribute('href'));
    }
  });
  handleRoute(); 
});

export { navigate };