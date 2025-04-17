import homeTemplate from '../templates/home.hbs';
import homeData from '../data/home.js';

export default function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = homeTemplate(homeData);
}