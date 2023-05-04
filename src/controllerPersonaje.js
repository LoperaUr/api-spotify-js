import { buscarPersonajes } from "../services/servicePersonaje.js";

let fila = document.getElementById("fila");

buscarPersonajes().then(function (personajes) {
  personajes.results.forEach((personaje) => {
    let nombre = document.createElement("p");
    nombre.classList.add("text-center", "fw-bold");
    nombre.textContent = personaje.name;

    let columna = document.createElement("div");
    columna.classList.add("col");

    let card = document.createElement("div");
    card.classList.add("card", "h-100", "shadow");

    card.appendChild(nombre);
    columna.appendChild(card);
    fila.appendChild(columna);
  });
});
