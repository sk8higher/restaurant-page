import headerComponent from '../homepage/header.js';

function renderMenupage() {
  document.body.insertAdjacentHTML('beforeend', headerComponent);
  console.log(document.body.innerHTML);
}

export default renderMenupage;
