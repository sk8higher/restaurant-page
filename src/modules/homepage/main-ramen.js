import ramenpic from './home-ramen-img.jpg';

function mainRamenComponent() {
  const ramenMainElement = document.createElement('div');
  const ramenDescElement = document.createElement('p');

  ramenMainElement.classList.add('ramen-img-wrapper');

  ramenDescElement.textContent = 'Everyone loves our ramen!';

  const ramenPicture = new Image();
  ramenPicture.src = ramenpic;
  ramenPicture.classList.add('main-pic');

  ramenMainElement.appendChild(ramenPicture);
  ramenMainElement.appendChild(ramenDescElement);

  return ramenMainElement;
}

export default mainRamenComponent();
