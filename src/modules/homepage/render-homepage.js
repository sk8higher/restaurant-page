import mainDescComponent from './main-description.js';
import mainRamenComponent from './main-ramen.js';
import openingHoursComponent from './opening-hours.js';

function renderHomepage() {
  document.body.insertAdjacentHTML('beforeend', mainDescComponent);
  document.body.insertAdjacentElement('beforeend', mainRamenComponent);
  document.body.insertAdjacentHTML('beforeend', openingHoursComponent);
}

export default renderHomepage;
