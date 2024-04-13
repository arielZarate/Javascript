# TEORIA

## TIPOS DE PETICIONES HTTP

- GET. Es el método de petición HTTP más utilizado con diferencia. ...
- HEAD. Con una petición HEAD, sólo recibes la información de la cabecera de la página que quieres cargar. ...
- POST. Tu navegador utiliza el método de petición HTTP POST cuando necesita enviar datos al servidor. ...
- PUT. actualizar
- DELETE

# PROMESAS CON THEN CATCH

    fetch  ('https://pokeapi.co/api/v2/pokemon/')


        .then(response => response.json())   //MIENTRAS

        .catch(error=>{console.log(error) })   //ENR CASO DE ERROR HACE ESTO

# PROMESAS CON ASYNC AWAIT (NUEVA)

import axios from 'axios';

//funcion con async await
async function traerDatos()
{
let response= await axios.get("https://pokeapi.co/api/v2/pokemon/");

console.log(response)
}
