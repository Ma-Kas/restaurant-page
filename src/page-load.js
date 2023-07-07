export const createHeaderDOM = () => {
  const navigationContent = ['Top', 'Menu', 'Access'];

  const content = document.getElementById('content');

  const divHeader = document.createElement('div');
  const imgHeader = document.createElement('img');
  const divNavigationBar = document.createElement('div');

  divHeader.classList.add('header');
  imgHeader.classList.add('header-image');
  imgHeader.src = '../src/img/header.png';
  imgHeader.alt = 'Avocados Mexican Cafe';
  divNavigationBar.classList.add('navigation-bar');
  
  content.appendChild(divHeader);
  divHeader.appendChild(imgHeader);
  divHeader.appendChild(divNavigationBar);

  // Need to create 3 different items for navigation bar, so create in loop
  // Assign content and id from array
  for (let i = 0; i < 3; i++) {
    const divNavigationItem = document.createElement('div');
    divNavigationItem.classList.add('navigation-item');
    divNavigationItem.id = navigationContent[i].toLowerCase();
    divNavigationItem.textContent = navigationContent[i];
    divNavigationBar.appendChild(divNavigationItem);
  }
}

export const createMainTopDOM = () => {
  const restaurantIntroContent = [
    'メキシコ人シェフが作る本格メキシカン料理。',
    '日本で意外と知られていない本格的なメキシコ料理をみなさまに知っていただきたいという思いを込めて作っています。',
    'ぜひお気軽にメキシコを味わいにお越しください。'
  ];

  const content = document.getElementById('content');

  const divMainTop = document.createElement('div');
  const imgMainTop = document.createElement('img');
  const divMainTopText = document.createElement('div');
  
  divMainTop.classList.add('main-top');
  imgMainTop.classList.add('main-top-image');
  imgMainTop.src = '../src/img/main.png';
  imgMainTop.alt = 'A delicious plate of Maxican food.';
  divMainTopText.classList.add('main-top-text');
  

  content.appendChild(divMainTop);
  divMainTop.appendChild(imgMainTop);
  divMainTop.appendChild(divMainTopText);

  // Need to create 3 different paragraphs, so create in loop
  // Assign text content from array
  for (let i = 0; i < 3; i++) {
    const pRestaurantIntro = document.createElement('p');
    pRestaurantIntro.classList.add('restaurant-intro');
    pRestaurantIntro.textContent = restaurantIntroContent[i];
    divMainTopText.appendChild(pRestaurantIntro);
  }
}

export const createFooterDOM = () => {
  const content = document.getElementById('content');

  const divFooter = document.createElement('div');
  divFooter.classList.add('footer');
  content.appendChild(divFooter);

  const divFooterText = document.createElement('div');
  divFooterText.classList.add('footer-text');
  divFooterText.textContent = 'Avocados Osaka ©︎ 2023';
  divFooter.appendChild(divFooterText);
}