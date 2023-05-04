export async function buscarPersonajes() {
  const URL = "https://swapi.dev/api/people/";
  const PETICION = {
    method: "GET",
  };

  let respuesta = await fetch(URL, PETICION);
  let personajesEntregados = await respuesta.json();

  return personajesEntregados;
}
