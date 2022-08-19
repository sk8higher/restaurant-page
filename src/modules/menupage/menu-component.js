import kimchiImg from './img/kimchi.jpg';
import pancakesImg from './img/pancakes.jpg';
import tacosImg from './img/tacos.jpg';

function menuComponent() {
  // prettier-ignore
  const menuElement = 
  `
    <div class="menu-card">
      <img class="menu-img" src="${kimchiImg}"/>
      <h3 class="menu-name">Kimchi!</h3>
      <p class="menu-desc">Your favourite dish</p>
      <p class="menu-price">2$</p>
    </div>

    <div class="menu-card">
      <img class="menu-img" src="${pancakesImg}"/>
      <h3 class="menu-name">Pancakes</h3>
      <p class="menu-desc">For sweeties like you!</p>
      <p class="menu-price">4$</p>
    </div>
  
    <div class="menu-card">
      <img class="menu-img" src="${tacosImg}"/>
      <h3 class="menu-name">Taco</h3>
      <p class="menu-desc">So hot</p>
      <p class="menu-price">3$</p>
    </div>
  `

  return menuElement;
}

export default menuComponent();
