import headerComponent from './header.js';
import mainDescComponent from './main-description.js';
import mainRamenComponent from './main-ramen.js';
import openingHoursComponent from './opening-hours.js';

function renderHomepage() {
  document.body.insertAdjacentHTML('beforebegin', headerComponent);
  document.body.insertAdjacentHTML('beforebegin', mainDescComponent);
  document.body.insertAdjacentElement('beforebegin', mainRamenComponent);
  document.body.insertAdjacentHTML('beforebegin', openingHoursComponent);
}

export default renderHomepage;
