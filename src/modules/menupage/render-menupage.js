import menuComponent from './menu-component.js';

function renderMenupage() {
  document.body.replaceChildren(document.querySelector('header'));

  document.body.insertAdjacentHTML('beforeend', menuComponent);
}

export default renderMenupage;
