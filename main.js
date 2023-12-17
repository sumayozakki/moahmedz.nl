function glitchBackground() {
    const background = document.getElementById('background');
    background.style.backgroundColor = getRandomColor();
    setTimeout(glitchBackground,-3);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

glitchBackground();







function rotatePhone() {
    const phone = document.getElementById('phone');
    phone.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Herhaal de rotatie elke 2 seconden (2000 milliseconden)
    setTimeout(rotatePhone, -200);
}

// Start de rotatie wanneer de pagina is geladen
window.onload = function () {
    rotatePhone();
};




document.addEventListener("DOMContentLoaded",function() {
  setTimeout(function(){
    document.getElementById("popupOverlay").style.display = "flex";
  },1000);
});


function closePopup() {
  var popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "none";

  setTimeout(function() {
    popupOverlay.style.display = "flex";
  },50);
}













// const spelveld = document.getElementById('spelveld');
//   const kat = document.getElementById('kat');
//   const muis = document.getElementById('muis');

//   let katX = 50;
//   let katY = 50;

//   let muisX = 200;
//   let muisY = 200;

//   function updatePosities() {
//     kat.style.left = katX + 'px';
//     kat.style.top = katY + 'px';

//     muis.style.left = muisX + 'px';
//     muis.style.top = muisY + 'px';
//   }

//   function beweegKat(event) {
//     switch (event.key) {
//       case 'ArrowUp':
//         katY -= 10;
//         break;
//       case 'ArrowDown':
//         katY += 10;
//         break;
//       case 'ArrowLeft':
//         katX -= 10;
//         break;
//       case 'ArrowRight':
//         katX += 10;
//         break;
//     }

//     checkAanraking();
//     updatePosities();
//   }


//   function beweegMuisAutomatisch() {
//     setInterval(() => {
//         // Willekeurige richting
//         const richting = Math.random() * 360;
//         const snelheid = 15;

//         // Bereken de nieuwe positie van de muis
//         const nieuweMuisX = muisX + snelheid * Math.cos(richting);
//         const nieuweMuisY = muisY + snelheid * Math.sin(richting);

//         // Controleer of de nieuwe positie binnen het spelveld is
//         if (nieuweMuisX >= 0 && nieuweMuisX <= 300 && nieuweMuisY >= 0 && nieuweMuisY <= 300) {
//             muisX = nieuweMuisX;
//             muisY = nieuweMuisY;
//         }

//         checkAanraking();
//         updatePosities();
//     }, 50);
// }


//   function checkAanraking() {
//     if (
//       katX < muisX + 50 &&
//       katX + 50 > muisX &&
//       katY < muisY + 50 &&
//       katY + 50 > muisY
//     ) {
//       alert('Game Over!');
//       resetSpel();
//     }
//   }

//   function resetSpel() {
//     katX = 50;
//     katY = 50;
//     muisX = 200;
//     muisY = 200;

//     updatePosities();
//   }

//   function startSpel() {
//     window.addEventListener('keydown', beweegKat);
//     beweegMuisAutomatisch();

//     updatePosities();
//   }

//   startSpel();




  