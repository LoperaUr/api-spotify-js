import { buscarFilms } from "../services/serviceFilms.js";

let fila = document.getElementById("fila2");

buscarFilms().then(function (films) {
  films.results.forEach((element) => {
    let nombre = document.createElement("h5");
    let director = document.createElement("p");
    let releaseDate = document.createElement("p");

    nombre.classList.add("card-text", "text-center");
    director.classList.add("card-text", "text-center");
    releaseDate.classList.add("card-text", "text-center");

    nombre.textContent = element.title;
    director.textContent = element.director;
    releaseDate.textContent = element.release_date;

    let columna = document.createElement("div");
    columna.classList.add("col-2", "mb-2", "mt-5");

    let card = document.createElement("div");
    card.classList.add("card", "h-70", "shadow", "p-3", "mb-5", "bg-white");

    card.appendChild(nombre);
    card.appendChild(director);
    card.appendChild(releaseDate);
    columna.appendChild(card);
    fila.appendChild(columna);
  });
});
