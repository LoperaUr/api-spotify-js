import { pedirTokenSpotify } from "../services/serviceSpotify.js";
import { buscarCanciones } from "../services/serviceConsultar.js";

let fila = document.getElementById("fila");

pedirTokenSpotify().then(function (token) {
  buscarCanciones(token).then(function (canciones) {
    canciones.tracks.forEach(function (cancion) {
      let columna = document.createElement("div");
      columna.classList.add("col");

      let card = document.createElement("div");
      card.classList.add("card", "h-100", "shadow", "p-3");

      let pista = document.createElement("audio");
      pista.classList.add("w-100");
      pista.setAttribute("controls", "controls");
      pista.src = cancion.preview_url;

      let foto = document.createElement("img");
      foto.classList.add("img-fluid", "w-100");
      foto.src = cancion.album.images[0].url;

      let nombre = document.createElement("p");
      nombre.classList.add("text-center", "fw-bold");
      nombre.textContent = cancion.name;

      card.appendChild(foto);
      card.appendChild(nombre);
      card.appendChild(pista);
      columna.appendChild(card);
      fila.appendChild(columna);
    });
  });
});
