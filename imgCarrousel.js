/* Para que el perfil cambie de imagen con una transición de opacidad */
const img = document.querySelector(".profile img");
const images = [
  "assets/channels4_profile.webp",
  "assets/profile.webp",
  "assets/35_n.webp",
  "assets/27_n.webp",
  "assets/112_n.webp",
  "assets/295_n.webp",
  "assets/612_n.webp",
]; // array de imágenes

// Precargar las imágenes
const preloadImages = images.map((image) => {
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
  await Promise.all(
    preloadImages.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
      });
    })
  );
}

// Esperar a que todas las imágenes se hayan cargado antes de ejecutar la función cambiarImagen
waitForImagesToLoad().then(() => {
  setInterval(cambiarImagen, 5000);
});
