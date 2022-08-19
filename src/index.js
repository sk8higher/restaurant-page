import './style.css';
import renderHomepage from './modules/homepage/render-homepage.js';
import renderMenupage from './modules/menupage/render-menupage.js';
import headerComponent from './modules/homepage/header.js';
import renderContactpage from './modules/contactpage/render-contactpage.js';
function clearActive() {
  document
    .querySelectorAll('.nav-button')
    .forEach((el) => el.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.insertAdjacentHTML('afterbegin', headerComponent);
  renderHomepage();

  document.querySelector('header').addEventListener('click', function (e) {
    if (!e.target.classList.contains('nav-button')) return;

    if (
      e.target.closest('.nav-button').classList.contains('menu') &&
      !e.target.closest('.nav-button').classList.contains('active')
    ) {
      renderMenupage();
      clearActive();

      e.target.closest('.nav-button').classList.add('active');
    }

    if (
      e.target.closest('.nav-button').classList.contains('home') &&
      !e.target.closest('.nav-button').classList.contains('active')
    ) {
      renderHomepage();

      clearActive();

      e.target.closest('.nav-button').classList.add('active');
    }

    if (
      e.target.closest('.nav-button').classList.contains('contact') &&
      !e.target.closest('.nav-button').classList.contains('active')
    ) {
      renderContactpage();
      clearActive();

      e.target.closest('.nav-button').classList.add('active');
    }
  });
});
