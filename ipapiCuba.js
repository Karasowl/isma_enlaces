/* Para que el elemento embebido de Spotify se oculte para usuarios que visitan la página desde Cuba */
fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    if (data.country_name === "Cuba") {
      const spotifyPlayer = document.querySelector(".spotify-player");
      spotifyPlayer.style.display = "none";
    } else {
      const spotifyPlayer = document.querySelector(".spotify-player");
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://open.spotify.com/embed/track/3cWkIYNstZUq6vmzZbnUXo?utm_source=generator";
      iframe.frameborder = "0";
      iframe.allowFullscreen = "";
      iframe.allow =
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.loading = "lazy";
      spotifyPlayer.appendChild(iframe);
    }
  });
