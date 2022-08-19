import menuComponent from './menu-component.js';

function renderMenupage() {
  document.body.replaceChildren(...document.querySelectorAll('header'));

  document.body.insertAdjacentHTML('beforeend', menuComponent);
}

export default renderMenupage;
