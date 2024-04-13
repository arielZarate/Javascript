/* Ejercicio 3

IMPORTANTE: no modificar el código de arriba(variables instructor y alumno, y función getNombre)

Usando el método bind() guardar, en las dos variables declaradas a continuación,
    dos funciones que actúen como getNombre pero retornen el nombre del instructor
y del alumno, respectivamente.*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
Ejercicio 4

Sin modificar la función crearCadena, usar bind para guardar, 
en las tres variables declaradas a continuación,
 tres funciones que retornen una cadena (string) 
 y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente).
  Las funciones obtenidas deberían recibir solamente un 
  argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}
/* 
crearCadena('¿','Hola como estan', '?'); // ¿Hola como estan?
*/
//this ignora lo que es el objeto scope  , luego comienza a reemplazar donde necesite

// si les agrego mas parametro de los que recibe los va ignorar
let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");