import contactComponent from './contact-component.js';

function renderContactpage() {
  document.body.replaceChildren(document.querySelector('header'));

  document.body.insertAdjacentHTML('beforeend', contactComponent());
}

export default renderContactpage;
