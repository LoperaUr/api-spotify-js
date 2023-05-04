import { buscarPersonajes } from "../services/servicePersonaje.js";

let fila = document.getElementById("fila");

buscarPersonajes().then(function (personajes) {
  personajes.results.forEach((personaje) => {
    let nombre = document.createElement("h5");
    let gender = document.createElement("p");
    let height = document.createElement("p");

    nombre.classList.add("card-text", "text-center");
    gender.classList.add("card-text", "text-center");
    height.classList.add("card-text", "text-center");
    nombre.textContent = personaje.name;
    gender.textContent = personaje.gender;
    height.textContent = personaje.height;

    let columna = document.createElement("div");
    columna.classList.add("col-2", "mb-2", "mt-5");

    let card = document.createElement("div");
    card.classList.add("card", "h-70", "shadow", "p-1", "mb-5", "bg-white");

    card.appendChild(nombre);
    card.appendChild(gender);
    card.appendChild(height);

    columna.appendChild(card);
    fila.appendChild(columna);
  });
});
