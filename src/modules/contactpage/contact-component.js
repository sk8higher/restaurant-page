import placeImg from './place.png';

function contactComponent() {
  // prettier-ignore
  return `
  <h1 class="contact-head">Contact Us</h1>
  <div class="info-wrapper">
    <p class="info-text">Our phone: 123-(56)-4789</p>
    <p class="info-text">Our location: 4130 Sheridan Ave, Des Moines, IA 50310, USA</p>
    <img class="location-img" src="${placeImg}" alt="Our location"/>
  </div>
  `;
}

export default contactComponent;
