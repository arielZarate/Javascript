
let miVariable = "freeCodeCamp";

// Muestro el contenido de la variable por consola.
console.log(miVariable);


// REASIGNACIÓN
// Con let podemos cambiar el valor de una variable.

miVariable = true;
console.log(miVariable);


// CONST
// Las variables declaradas con const no pueden ser reasignadas.

const miConstante = "Me llamo Ariel";
console.log(miConstante);


// Una variable const debe inicializarse al momento de declararla.
// Esto da error porque no le estamos asignando ningún valor.

// const miSegundaConstante;


// Esto también da error porque estamos intentando cambiar
// el valor de una variable declarada con const.

// miConstante = 23;
// console.log(miConstante);


// OPERACIONES CON VARIABLES
// Podemos utilizar variables para realizar operaciones matemáticas.

let n1 = 12;
let n2 = 13;

console.log(n1 + n2);


// UNDEFINED
// Si declaramos una variable con let pero no le asignamos un valor,
// su valor será undefined.

let n3;
console.log(n3);


// Si utilizamos n3 en una operación, el resultado será NaN,
// porque n3 tiene el valor undefined.

// console.log(n1 + n2 + n3);


// STRING
// Las comillas de apertura y cierre deben coincidir.
// Este ejemplo da error porque comienza con comillas dobles
// y termina con comillas simples.

// const cadena = "nueva cadena';


// Forma correcta:

const cadena = "nueva cadena";
console.log(cadena);