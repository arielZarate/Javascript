/* 

Básicamente, es posible que el código _levante(raise) _ o _tire(
    throw) _ una excepción, que es un valor(un objeto).Podríamos decir que es parecido a un `return`, pero con superpoderes, porque este `return`
puede volver no sólo _salir_ de la función en la que está, si no saltear varios execution contexts hasta llegar el entorno más alto donde se haya iniciado la serie de invocaciones que llegaron a generar una excepción.En inglés este proceso se conoce como _unwinding the stack_.
Por suerte, cuando programamos podemos intentar _agarrar(
    catch) _ una excepción que va _subiendo_(o _bajando_) por el stack de ejecución, de tal forma que ejecutemos código en donde agarramos la excepción y seguir desde ahí.
Para hacer esto en JavaScript vamos a usar el statement: `try`
y `catch`:
*/

/*javascript
          try {
             //Código a ejecutar
             [break;]
          } 
          
          catch ( e ) {
             // Código a ejecutar si ocurre una excepción (acá la agarramos)
             [break;]
          }
          // el finally es opcional 
          [ finally {
             // Siempre se ejecuta este código, haya o no una excepción
          }]
    */

//Por ejemplo:

function lastElement(array) {
    if (array.length > 0) return array[array.length - 1];
    else throw "No existe el último elemento de un arreglo vacío.";
}

function lastElementPlusTen(array) {
    return lastElement(array) + 10;
}

try {
    print(lastElementPlusTen([]));
} catch (error) {
    print("Hubo un problema ", error);
}

//Tal vez no lo sabíamos, pero muchos errores en realidad lo que hacen es tirar una excepción. Por ejemplo:

//javascript
try {
    console.log(hola);
} catch (error) {
    console.log("Atrapado: " + error.message);
}

/* 
Cuando una excepción es _tirada_, pero no hay nadie que la _atrape_, empieza a subir por el stack de ejecución, hasta que finalmente llega hasta el ambiente global, en donde es _atrapada_ por este. Por lo tanto, cada _enviroment_ va a manejar como quiera la excepción, en general dejan de ejecutar lo que estaban haciendo y te muestran la excepción con un formato particular.
*/