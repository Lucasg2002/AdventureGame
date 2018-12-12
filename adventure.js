var title= document.getElementById('title')
var description= document.getElementById('description')
var button1= document.getElementById('button1')
var button2= document.getElementById('button2')
var button3 = document.getElementById('button3')
var inventoryItem = document.getElementById('inventoryItem')
var audio = new Audio("island.mp3")



function startGame() {
  button1.style.display= 'inline'
   button2.style.display= 'inline'
   description.style.fontSize= '16px'
  document.body.style.backgroundImage= "url('pictures/Island.gif')";
	title.innerHTML = "Lost on the Island";
	description.innerHTML = "Je wordt wakker en het is heel donker je weet niet waar je bent, maar daar wil je natuurlijk achter komen. Je komt erachter dat je op een eiland bent. Door keuzes te maken probeer je van het eiland af te komen maar er zitten soms levensbepalende keuzes bij. Je doel is om veilig van het eiland af te komen ";
	button1.innerHTML= "start"
  button2.innerHTML= "speel muziek af"
  button1.onclick= function(){level1();} 
  }
  button2.onclick= function() {audio.play()}
  inventoryItem.style.display= 'none';
  

startGame(); 

function level1() {

  document.body.style.backgroundImage = "url('pictures/darkcave.jpg')";
  title.innerHTML = "Level 1";
  description.innerHTML = "Het is donker en je wordt wakker en je merkt dat je niet meer bent op de plek waar je de vorige dag was. wat ga je doen, het eiland verkennen waar je bent  of ga je nog even rustig aan te doen en een kampvuur maken"
  button1.innerHTML='eiland verkennen';
  button2.innerHTML='kampvuur maken';
  inventoryItem.style.display= 'none';
  button2.style.width = "250px";
  button1.onclick= function(){eilandverkennen()}
  button2.onclick= function(){kampvuur()}
  button2.style.display= 'inline';
}

function kampvuur() {
  title.innerHTML = "Level 2";
	document.body.style.backgroundImage = "url('pictures/stones.png')";
	description.innerHTML = "Je gaat een kampvuur maken maar je weet niet wat je moet gebruiken je ziet twee stenen Kies je steen 1 of steen 2."
	button1.innerHTML='steen 1';
	button2.innerHTML='steen 2';
	inventoryItem.style.display= 'none';
  button1.onclick= function(){gameover()
    description.innerHTML= "Je hebt de verkeerde steen gekozen hierdoor kan je geen vuur maken en vries je dood GAMEOVER";}
  button2.onclick= function(){steen2()}
}
 
 
 function eilandverkennen(){
   document.body.style.backgroundImage = "url('pictures/insidecave.jpg')";
   description.innerHTML = "Je staat op en ziet dat je in een grot bent maar je weet niet of het veilig is om naar buiten te gaan Ga naar buiten of blijf voor altijd binnen."   
   title.innerHTML = "level 2"
   button1.innerHTML='Naar buiten';
   button2.innerHTML='Binnen blijven';
  inventoryItem.style.display= 'none';
  button1.onclick= function(){naarbuiten()}
  button2.onclick= function(){gameover()
   description.innerHTML = "Doordat je binnenblijft sterf je door de kou GAMEOVER"}
  }


function steen2(){
title.innerHTML = "level3"
description.innerHTML = "Je hebt de goede steen gepakt, een vuursteen. Nu kan je een kampvuur maken wil je naar buiten gaan om eten te zoeken of blijf je binnen in de grot om daar eten te gaan zoeken "
document.body.style.backgroundImage = "url('pictures/insidecave.jpg')";
 button1.innerHTML='binnen eten zoeken';
  button2.innerHTML='buiten eten zoeken';
  button1.style.width = "250px";
  button1.onclick= function(){gameover()
    description.innerHTML = "Je komt in de grot maar je voelt allemaal dingen bij voeten je kijkt en je ziet dat het slangen zijn ze zijn ook giftig je bent dood GAMEOVER"}
  button2.onclick= function(){buitenzoeken()}
}

function naarbuiten(){
 document.body.style.backgroundImage = "url('pictures/wolf.jpg')";
 description.innerHTML = "Je loopt naar buiten en schrikt want je ziet een wolf voor je wat doe je? Wil je hard wegrennen of wil je blijven staan?"
 title.innerHTML = "level 3"
  button1.innerHTML='wegrennen';
   button2.innerHTML='blijven staan';
   description.style.color = 'black';
   description.style.fontSize = '25px';
   button1.onclick= function(){wegrennen()}
   button2.onclick= function(){gameoverwolf()
   description.innerHTML = "je blijft staan maar daardoor valt de wolf je aan GAMEOVER"}
 }



 function wegrennen(){
  title.innerHTML= "level 4" 
  description.innerHTML = "Je rent heel hard weg voor de wolf maar je moet hem proberen weg t lokken wat doe je verder rennen of een stok gooien naar de wolf"
  document.body.style.backgroundImage = "url('pictures/wegrennenwolf.jpg')";
  button1.innerHTML= 'verder rennen'
  button2.innerHTML= 'stok gooien'
    button1.onclick= function(){gameoverwolf()
     description.innerHTML = "Je rent verder maar de wolf is veel sneller dus hij valt je aan en je sterft  GAMEOVER."}
    button2.onclick= function(){gameoverwolf()
    description.innerHTML = "Je gooit een stok naar de wolf maar dat doet niks tegen de wolf hierdoor haalt de wolf je in en valt hij je aan GAMEOVER"}

 }

  function buitenzoeken(){
    title.innerHTML= "level 4"
 description.innerHTML = "Je gaat naar buiten om eten te zoeken maar je ziet bananen hoog in de boom hangen maar ook bessen laag op de grond. Wil je de bananen pakken of wil je de bessen pakken?"
 document.body.style.backgroundImage = "url('pictures/banaan.jpg')";
button1.innerHTML= "Bananen pakken"
button2.innerHTML= "Bessen pakken"
 button1.onclick= function(){bananen()}
   button2.onclick= function(){gameover()
    description.innerHTML = "Je hebt de bessen gepakt en eet ze op maar opeens merk je dat ze giftig zijn dus je bent dood GAMEOVER"}
 }


 function bananen(){
  title.innerHTML= "level 5 "
 description.innerHTML = "Je hebt nu eten maar wat wil je nu doen een uitweg van het eiland te zoeken of het eiland verder verkennen?"
 document.body.style.backgroundImage = "url('pictures/land.jpg')";
button1.innerHTML= "uitweg zoeken"
button2.innerHTML= "verder lopen "
button1.onclick= function(){uitwegzoeken()}
   button2.onclick= function(){verderlopen()}
 }



 function uitwegzoeken(){
  title.innerHTML="level 6"
 description.innerHTML = "Je rent heel lang over het eiland heen en uiteindelijk zie je heel veel lampen branden maar je weet niet of het veilig is om daar heen te gaan,wil je naar de lamp gaan of wil je verder een uitweg zoeken? "
 document.body.style.backgroundImage = "url('pictures/ren.jpg')";
 button1.innerHTML= "naar de lamp"
 button2.innerHTML= "uitweg zoeken"
 button1.onclick= function(){lamp()}
   button2.onclick= function(){gameover()
    description.innerHTML="Je loopt verder om te zoeken en je ziet een boot en je besluit daar op te gaan maar als je op de boot stapt worden de deuren gesloten en kom je in een cabine die steeds verder gevuld wordt met water dus hierdoor verdrink je GAMEOVER"}
 }

 
 function verderlopen(){
  title.innerHTML="level 6"
  description.innerHTML = "Je loopt verder op het eiland maar raakt uitgeput en je ziet water Wil je het water drinken of niet?"
  document.body.style.backgroundImage = "url('pictures/water.jpg')";
  button1.innerHTML= "Ja"
 button2.innerHTML= "Nee"
 button1.onclick= function(){win()
 description.innerHTML = "Je drinkt het water en hierdoor kan je weer doorlopen maar je wilt nog wel van het eiland af komen er ligt een boot en daarmee vaar je weg van het eiland en kom je op het vaste land aan je bent veilig van het eiland afgekomen gefeliciteerd."}
   button2.onclick= function(){gameover()
   description.innerHTML = "Je hebt geen water gedronken en hierdoor sterf je GAMEOVER"}
 }

 function lamp(){
  title.innerHTML="level 7"
document.body.style.backgroundImage = "url('pictures/lamp.jpg')";
 description.innerHTML = "Je komt aan bij de lamp en ziet dat het een huisje is bij het huisje ontmoet je iemand en diegene zegt dat dit een eiland is waar helemaal niemand meer woont, hij heeft een boot en hij besluit om je weg te brengen naar het vaste land maar onderweg naar het vaste land is er een storm maar die was allang op het nieuws dus er vliegt al een helikopter maar die helikopter kan nog 1 persoon meenemen dus je moet kiezen wie het overleeft kies je voor jezelf of kies je voor de ander?"
button1.innerHTML= "de ander"
 button2.innerHTML= "jezelf "
 button1.onclick= function(){gameover()
 description.innerHTML = "Je bent een aardig mens want je hebt de ander laten overleven maar hierdoor sterf jij helaas GAMEOVER"}
   button2.onclick= function(){win()
   description.innerHTML = "Je bent veilig van het eiland afgekomen gefeliciteerd"}
 }


function gameover(){
 title.innerHTML="";
 document.body.style.backgroundImage = "url('pictures/gameover.png')";
 button1.style.display= 'none';
 button2.style.display= 'none';
description.style.color = 'grey';
setTimeout(startGame, 3000);

}
function gameoverwolf(){
title.innerHTML="";
document.body.style.backgroundImage = "url('pictures/wolf.gif')";
 button1.style.display= 'none';
 button2.style.display= 'none';
  description.style.color = 'grey';
  setTimeout(startGame, 3000);
}

function win(){
title.innerHTML="";
document.body.style.backgroundImage = "url('pictures/win.jpg')";
 button1.style.display= 'none';
 button2.style.display= 'none';
  description.style.color = 'grey';

}


