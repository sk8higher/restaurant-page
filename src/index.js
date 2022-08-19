import './style.css';
import renderHomepage from './modules/homepage/render-homepage.js';
import renderMenupage from './modules/menupage/render-menupage.js';

document.addEventListener('DOMContentLoaded', function () {
  renderHomepage();

  document.querySelector('header').addEventListener('click', function (e) {
    if (!e.target.classList.contains('nav-button')) return;

    if (e.target.classList.contains('menu')) {
      renderMenupage();
    }
  });
});
