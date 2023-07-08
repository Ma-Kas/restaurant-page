import accessImage from './img/access.jpg';

export const createAccessDOM = () => {
  const mainAccessContent = [
    {left: 'Address', right:'大阪市中央区上町１丁目１−２２'},
    {left: 'TEL', right:'070-9045-8901'},
    {left: 'Business hours', right:'月曜日・日曜日   10:30-17:00<br>火曜日〜日曜日   10:30~21:30'},
    {left: 'By Train', right:'JR森ノ宮駅から８５０m<br>谷町四丁目駅から７００m'},
    {left: '', right:'お車でお越しの場合は目の前にコインパーキングがあります。'},
  ];

  const content = document.getElementById('content');

  const divMainAccess = document.createElement('div');
  const divMainAccessHeading = document.createElement('div');
  const divMainAccessContainer = document.createElement('div');
  const imgMainAccessImage = document.createElement('img');
  const divMainAccessCard = document.createElement('div');

  divMainAccess.classList.add('main-access');
  content.appendChild(divMainAccess);

  divMainAccessHeading.classList.add('main-access-heading');
  divMainAccessHeading.textContent = 'Access';
  divMainAccess.appendChild(divMainAccessHeading);

  divMainAccessContainer.classList.add('main-access-container');
  divMainAccess.appendChild(divMainAccessContainer);

  imgMainAccessImage.classList.add('main-access-image');
  imgMainAccessImage.src = accessImage;
  imgMainAccessImage.alt = 'Avocados Mexican Cafe Front.';
  divMainAccessContainer.appendChild(imgMainAccessImage);

  divMainAccessCard.classList.add('main-access-card');
  divMainAccessContainer.appendChild(divMainAccessCard);

  for (let i = 0; i < 5; i++) {
    const divAccessCardItem = document.createElement('div');
    divAccessCardItem.classList.add('access-card-item');
    divMainAccessCard.appendChild(divAccessCardItem);

    if ((i === 0) || (i === 1) || (i === 2)) {
      const divAccessCardItemLeft = document.createElement('div');
      divAccessCardItemLeft.classList.add('access-card-item-left');
      divAccessCardItemLeft.textContent = mainAccessContent[i].left;
      divAccessCardItem.appendChild(divAccessCardItemLeft);

      const divAccessCardItemRight = document.createElement('div');
      divAccessCardItemRight.classList.add('access-card-item-right');
      divAccessCardItemRight.innerHTML = mainAccessContent[i].right;
      divAccessCardItem.appendChild(divAccessCardItemRight);

      const divAccessCardLine = document.createElement('div');
      divAccessCardLine.classList.add('access-card-line');
      divMainAccessCard.appendChild(divAccessCardLine);

    } else if (i === 3) {
      // Exception handling for 4th item in grid (with Google Maps)
      const divAccessCardItemLeft = document.createElement('div');
      divAccessCardItemLeft.classList.add('access-card-item-left');
      divAccessCardItemLeft.textContent = mainAccessContent[i].left;
      divAccessCardItem.appendChild(divAccessCardItemLeft);

      const divAccessCardItemRight = document.createElement('div');
      divAccessCardItemRight.classList.add('access-card-item-right');
      divAccessCardItem.appendChild(divAccessCardItemRight);

      const divAccessCardItemRightSubitem = document.createElement('div');
      divAccessCardItemRightSubitem.classList.add('access-card-item-right-subitem');
      divAccessCardItemRightSubitem.innerHTML = mainAccessContent[i].right;
      divAccessCardItemRight.appendChild(divAccessCardItemRightSubitem);
      const iframeAccessCardItemRightSubitem = document.createElement('iframe');
      iframeAccessCardItemRightSubitem.classList.add('access-card-item-right-subitem');
      iframeAccessCardItemRightSubitem.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.5392375314154!2d135.52483927701462!3d34.6779688279931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e150ebb0874b%3A0xbf7ff25742f78ba6!2zQXZvY2Fkb3MgTWV4aWNhbiBDYWZlIGFuZCBCYXIg44Ki44Oc44Kr44OJ44K5!5e0!3m2!1sja!2sus!4v1688705473248!5m2!1sja!2sus';
      iframeAccessCardItemRightSubitem.allowFullscreen = '';
      iframeAccessCardItemRightSubitem.loading = 'lazy';
      iframeAccessCardItemRightSubitem.referrerPolicy = 'no-referrer-when-downgrade';
      divAccessCardItemRight.appendChild(iframeAccessCardItemRightSubitem);

      const divAccessCardLine = document.createElement('div');
      divAccessCardLine.classList.add('access-card-line');
      divMainAccessCard.appendChild(divAccessCardLine);

    } else if (i === 4){
      // Don't create a line div after last item
      const divAccessCardItemRight = document.createElement('div');
      divAccessCardItemRight.classList.add('access-card-item-right');
      divAccessCardItemRight.textContent = mainAccessContent[i].right;
      divAccessCardItem.appendChild(divAccessCardItemRight);
    }
  }
}