/* Para que el elemento embebido de Spotify se oculte para usuarios que visitan la página desde Cuba */
fetch('https://ipapi.co/json/')
.then(response => response.json())
.then(data => {
  if (data.country_name === 'Cuba') {
    const spotifyPlayer = document.querySelector('.spotify-player');
    spotifyPlayer.style.display = 'none';
  }
});