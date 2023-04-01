/* Para que el perfil cambie de imagen con una transición de opacidad */
const img = document.querySelector('.profile img');
const images = ['assets/channels4_profile.jpg', 'assets/profile.webp', 'assets/35_n.jpg', 'assets/27_n.jpg', 'assets/112_n.jpg', 'assets/295_n.jpg', 'assets/612_n.jpg' ]; // array de imágenes

let i = 1; // contador
function cambiarImagen() {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[i];
      img.style.opacity = 1;
      i++;
      if (i >= images.length) {
        i = 0;
      }
    }, 750);
  }
  setInterval(cambiarImagen, 5000);

/* convertir el elemento html de clase container en un elemnto que simule el movimiento 3D y que siga el movimiento del mouse */
const container = document.querySelector('.container');


function handleMouseMove(e) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
  
  container.addEventListener('mousemove', handleMouseMove);
  
  container.addEventListener('mouseleave', () => {
    container.style.transform = 'none';
  });

  window.addEventListener('deviceorientation', (e) => {
    const xAxis = e.gamma / 25;
    const yAxis = e.beta / 25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });



