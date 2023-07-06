export const createMenu = () => {
  console.log('called');
  const menuHeadingContent = ['まずは試してもらいたい', '- メキシコ料理 -'];
  const menuCardContent = [
    {
      id: 'quesedilla-card', 
      src: '../src/img/quesedilla.png', 
      alt: 'A delicious quesedilla.',
      name: 'ケサディーヤ',
      price: '¥1,100',
      text: 'メキシコ料理に馴染みがない方でもまずは試してもらいやすいメニューです。小麦粉で作られたトルティーヤにチーズ（スペイン語でケソ）と具材を挟んで焼いた料理です。',
    },
    {
      id: 'tacos-card', 
      src: '../src/img/tacos.png', 
      alt: 'A delicious taco.',
      name: 'タコス',
      price: '１つ￥６００〜',
      text: 'とうもろこしで作られたソフトタイプのタコスを使った本格メキシカンタコス。揚げた硬いタイプのタコスはよくアメリカなどで見られますが、メキシコではこの柔らかい手作りタコスを使ったものが主流です。',
    },
    {
      id: 'burrito-card', 
      src: '../src/img/burrito.png', 
      alt: 'A delicious burrito.',
      name: 'ブリトー',
      price: '¥1,150',
      text: 'お肉や野菜、ご飯を小麦粉トルティーヤ巻いたボリュームのあるブリトーはお腹すいた時に大満足できる料理です。ホイルに包まれていますので食べやすくテイクアウトでも人気です。',
    },
  ];

  const content = document.getElementById('content');

  const divMainMenu = document.createElement('div');
  const divMainMenuHeading = document.createElement('div');
  
  const divMainMenuContainer = document.createElement('div');
  

  divMainMenu.classList.add('main-menu');
  divMainMenuHeading.classList.add('main-menu-heading');
  divMainMenuContainer.classList.add('main-menu-container');

  content.appendChild(divMainMenu);
  divMainMenu.appendChild(divMainMenuHeading);

  for (let i = 0; i < 2; i++) {
    const pMenuHeading = document.createElement('p');
    pMenuHeading.classList.add('menu-heading');
    pMenuHeading.textContent = menuHeadingContent[i];
    divMainMenuHeading.appendChild(pMenuHeading);
  }

  divMainMenu.appendChild(divMainMenuContainer);

  for (let i = 0; i < 3; i++) {
    const divMenuCard = document.createElement('div');
    divMenuCard.classList.add('menu-card');
    divMenuCard.id = menuCardContent[i].id;
    divMainMenuContainer.appendChild(divMenuCard);

    const imgMenuCardImage = document.createElement('img');
    imgMenuCardImage.classList.add('menu-card-image');
    imgMenuCardImage.src = menuCardContent[i].src;
    imgMenuCardImage.alt = menuCardContent[i].alt;
    divMenuCard.appendChild(imgMenuCardImage);

    const divMenuCardInfo = document.createElement('div');
    divMenuCardInfo.classList.add('menu-card-info');
    divMenuCard.appendChild(divMenuCardInfo);

    const pMenuCardInfoName = document.createElement('p');
    pMenuCardInfoName.classList.add('menu-card-infos');
    pMenuCardInfoName.textContent = menuCardContent[i].name;
    divMenuCardInfo.appendChild(pMenuCardInfoName);

    const pMenuCardInfoPrice = document.createElement('p');
    pMenuCardInfoPrice.classList.add('menu-card-info');
    pMenuCardInfoPrice.textContent = menuCardContent[i].price;
    divMenuCardInfo.appendChild(pMenuCardInfoPrice);

    const divMenuCardText = document.createElement('div');
    divMenuCardText.classList.add('menu-card-text');
    divMenuCardText.textContent = menuCardContent[i].text;
    divMenuCard.appendChild(divMenuCardText);
  }
}