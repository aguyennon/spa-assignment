import aboutTemplate from '../templates/about.hbs';
import aboutData from '../data/about.js';

export default function renderAbout() {
  const app = document.getElementById('app');
  app.innerHTML = aboutTemplate(aboutData);
}