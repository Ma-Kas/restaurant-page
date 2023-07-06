export const createHeader = () => {
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
    const aNavigationItem = document.createElement('a');
    aNavigationItem.classList.add('navigation-item');
    aNavigationItem.href = '';
    aNavigationItem.id = navigationContent[i].toLowerCase();
    aNavigationItem.textContent = navigationContent[i];
    divNavigationBar.appendChild(aNavigationItem);
  }
}

export const createMainTop = () => {
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