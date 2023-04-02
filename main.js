/* Para que el perfil cambie de imagen con una transición de opacidad */
const img = document.querySelector('.profile img');
const images = ['assets/channels4_profile.webp', 'assets/profile.webp', 'assets/35_n.webp', 'assets/27_n.webp', 'assets/112_n.webp', 'assets/295_n.webp', 'assets/612_n.webp' ]; // array de imágenes

// Precargar las imágenes
const preloadImages = images.map(image => {
  const img = new Image();
  img.src = image;
  return img;
});

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

// Función asíncrona para esperar a que todas las imágenes se hayan cargado
async function waitForImagesToLoad() {
  await Promise.all(preloadImages.map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => { img.onload = resolve; });
  }));
}

// Esperar a que todas las imágenes se hayan cargado antes de ejecutar la función cambiarImagen
waitForImagesToLoad().then(() => {
  setInterval(cambiarImagen, 5000);
});

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


/* Para que el elemento embebido de Spotify se oculte para usuarios que visitan la página desde Cuba */
  fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    if (data.country_name === 'Cuba') {
      const spotifyPlayer = document.querySelector('.spotify-player');
      spotifyPlayer.style.display = 'none';
    }
  });


