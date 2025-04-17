import productsTemplate from '../templates/products.hbs';
import productsData from '../data/products.js';

export default function renderProducts() {
  const app = document.getElementById('app');
  app.innerHTML = productsTemplate(productsData);
}