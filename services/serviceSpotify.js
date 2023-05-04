export async function pedirTokenSpotify() {
  //1. Direccion (URL + Endpoint)
  const URL = "https://accounts.spotify.com/api/token";

  let datoUno = "grant_type=client_credentials";
  let datoDos = "client_id=5938fd7d0e5f4d889ba4db749d5780ad";
  let datoTres = "client_secret=63d8eca3cf88416ca881b4f92588b05b";

  //2. Configurar la request
  const PETICION = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `${datoUno}&${datoDos}&${datoTres}`,
  };

  //3. Consumir
  let respuesta = await fetch(URL, PETICION);
  let respuestaToken = await respuesta.json();

  let token = respuestaToken.token_type + " " + respuestaToken.access_token;
  return token;
}
