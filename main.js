(()=>{"use strict";const e=()=>{const e=["メキシコ人シェフが作る本格メキシカン料理。","日本で意外と知られていない本格的なメキシコ料理をみなさまに知っていただきたいという思いを込めて作っています。","ぜひお気軽にメキシコを味わいにお越しください。"],t=document.getElementById("content"),d=document.createElement("div"),c=document.createElement("img"),n=document.createElement("div");d.classList.add("main-top"),c.classList.add("main-top-image"),c.src="../src/img/main.png",c.alt="A delicious plate of Maxican food.",n.classList.add("main-top-text"),t.appendChild(d),d.appendChild(c),d.appendChild(n);for(let t=0;t<3;t++){const d=document.createElement("p");d.classList.add("restaurant-intro"),d.textContent=e[t],n.appendChild(d)}},t=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("footer"),e.appendChild(t);const d=document.createElement("div");d.classList.add("footer-text"),d.textContent="Avocados Osaka ©︎ 2023",t.appendChild(d)};(()=>{function d(d){switch(function(){const e=document.getElementById("content");[e.childNodes[2],e.childNodes[3]].forEach((t=>{e.removeChild(t)}))}(),d){case"top":e();break;case"menu":(()=>{const e=["まずは試してもらいたい","- メキシコ料理 -"],t=[{id:"quesedilla-card",src:"../src/img/quesedilla.png",alt:"A delicious quesedilla.",name:"ケサディーヤ",price:"¥1,100",text:"メキシコ料理に馴染みがない方でもまずは試してもらいやすいメニューです。小麦粉で作られたトルティーヤにチーズ（スペイン語でケソ）と具材を挟んで焼いた料理です。"},{id:"tacos-card",src:"../src/img/tacos.png",alt:"A delicious taco.",name:"タコス",price:"１つ￥６００〜",text:"とうもろこしで作られたソフトタイプのタコスを使った本格メキシカンタコス。揚げた硬いタイプのタコスはよくアメリカなどで見られますが、メキシコではこの柔らかい手作りタコスを使ったものが主流です。"},{id:"burrito-card",src:"../src/img/burrito.png",alt:"A delicious burrito.",name:"ブリトー",price:"¥1,150",text:"お肉や野菜、ご飯を小麦粉トルティーヤ巻いたボリュームのあるブリトーはお腹すいた時に大満足できる料理です。ホイルに包まれていますので食べやすくテイクアウトでも人気です。"}],d=document.getElementById("content"),c=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");c.classList.add("main-menu"),n.classList.add("main-menu-heading"),a.classList.add("main-menu-container"),d.appendChild(c),c.appendChild(n);for(let t=0;t<2;t++){const d=document.createElement("p");d.classList.add("menu-heading"),d.textContent=e[t],n.appendChild(d)}c.appendChild(a);for(let e=0;e<3;e++){const d=document.createElement("div");d.classList.add("menu-card"),d.id=t[e].id,a.appendChild(d);const c=document.createElement("img");c.classList.add("menu-card-image"),c.src=t[e].src,c.alt=t[e].alt,d.appendChild(c);const n=document.createElement("div");n.classList.add("menu-card-info"),d.appendChild(n);const s=document.createElement("p");s.classList.add("menu-card-infos"),s.textContent=t[e].name,n.appendChild(s);const i=document.createElement("p");i.classList.add("menu-card-info"),i.textContent=t[e].price,n.appendChild(i);const l=document.createElement("div");l.classList.add("menu-card-text"),l.textContent=t[e].text,d.appendChild(l)}})();break;case"access":(()=>{const e=[{left:"Address",right:"大阪市中央区上町１丁目１−２２"},{left:"TEL",right:"070-9045-8901"},{left:"Business hours",right:"月曜日・日曜日   10:30-17:00<br>火曜日〜日曜日   10:30~21:30"},{left:"By Train",right:"JR森ノ宮駅から８５０m<br>谷町四丁目駅から７００m"},{left:"",right:"お車でお越しの場合は目の前にコインパーキングがあります。"}],t=document.getElementById("content"),d=document.createElement("div"),c=document.createElement("div"),n=document.createElement("div"),a=document.createElement("img"),s=document.createElement("div");d.classList.add("main-access"),t.appendChild(d),c.classList.add("main-access-heading"),c.textContent="Access",d.appendChild(c),n.classList.add("main-access-container"),d.appendChild(n),a.classList.add("main-access-image"),a.src="../src/img/access.jpg",a.alt="Avocados Mexican Cafe Front.",n.appendChild(a),s.classList.add("main-access-card"),n.appendChild(s);for(let t=0;t<5;t++){const d=document.createElement("div");if(d.classList.add("access-card-item"),s.appendChild(d),0===t||1===t||2===t){const c=document.createElement("div");c.classList.add("access-card-item-left"),c.textContent=e[t].left,d.appendChild(c);const n=document.createElement("div");n.classList.add("access-card-item-right"),n.innerHTML=e[t].right,d.appendChild(n);const a=document.createElement("div");a.classList.add("access-card-line"),s.appendChild(a)}else if(3===t){const c=document.createElement("div");c.classList.add("access-card-item-left"),c.textContent=e[t].left,d.appendChild(c);const n=document.createElement("div");n.classList.add("access-card-item-right"),d.appendChild(n);const a=document.createElement("div");a.classList.add("access-card-item-right-subitem"),a.innerHTML=e[t].right,n.appendChild(a);const i=document.createElement("iframe");i.classList.add("access-card-item-right-subitem"),i.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.5392375314154!2d135.52483927701462!3d34.6779688279931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e150ebb0874b%3A0xbf7ff25742f78ba6!2zQXZvY2Fkb3MgTWV4aWNhbiBDYWZlIGFuZCBCYXIg44Ki44Oc44Kr44OJ44K5!5e0!3m2!1sja!2sus!4v1688705473248!5m2!1sja!2sus",i.allowFullscreen="",i.loading="lazy",i.referrerPolicy="no-referrer-when-downgrade",n.appendChild(i);const l=document.createElement("div");l.classList.add("access-card-line"),s.appendChild(l)}else if(4===t){const c=document.createElement("div");c.classList.add("access-card-item-right"),c.textContent=e[t].right,d.appendChild(c)}}})()}t()}(()=>{const e=["Top","Menu","Access"],t=document.getElementById("content"),d=document.createElement("div"),c=document.createElement("img"),n=document.createElement("div");d.classList.add("header"),c.classList.add("header-image"),c.src="../src/img/header.png",c.alt="Avocados Mexican Cafe",n.classList.add("navigation-bar"),t.appendChild(d),d.appendChild(c),d.appendChild(n);for(let t=0;t<3;t++){const d=document.createElement("div");d.classList.add("navigation-item"),d.id=e[t].toLowerCase(),d.textContent=e[t],n.appendChild(d)}})(),e(),t(),(()=>{const e=document.getElementById("top"),t=document.getElementById("menu"),c=document.getElementById("access");e.addEventListener("click",(()=>{d("top")})),t.addEventListener("click",(()=>{d("menu")})),c.addEventListener("click",(()=>{d("access")}))})()})()})();