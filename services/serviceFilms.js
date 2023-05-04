export async function buscarFilms() {
  const URL = "https://swapi.dev/api/films/";
  const PETICION = {
    method: "GET",
  };
  let respuesta = await fetch(URL, PETICION);
  let filmsEntregados = await respuesta.json();

  return filmsEntregados;
}
