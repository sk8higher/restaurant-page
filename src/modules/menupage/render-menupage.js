import headerComponent from '../homepage/header.js';

function renderMenupage() {
  document.body.replaceChildren(...document.querySelectorAll('header'));
}

export default renderMenupage;
