
/*

JavaScript es un idioma de tipado dinámico, lo que significa que no necesitas especificar el tipo de dato de una variable cuando la declaras. En cambio, el tipo se determina según el valor asignado a la variable mientras el programa se ejecuta. Esto te permite cambiar el tipo de una variable a lo largo del programa.

Veamos un ejemplo:

let example = "Hello";
example = 42;

En este ejemplo, tenemos una variable llamada example con el tipo de dato de cadena. Pero luego actualizamos el valor para que sea un número en su lugar.

La flexibilidad del tipado dinámico hace que JavaScript sea más indulgente y fácil de trabajar para guiones rápidos, pero también puede introducir errores que pueden ser más difíciles de detectar, especialmente a medida que el programa crece.

En lenguajes con tipado estático como C# o C++, debes declarar el tipo de dato de una variable cuando la creas, y ese tipo no puede cambiar.

Por ejemplo, si declaras una variable como integer, solo puedes asignarle valores enteros. Si intentas asignarle un tipo diferente, el programa lanzará un error.

Aquí tienes un ejemplo en el lenguaje C#:

int data = 42; // data must always be an integer
data = "Hello"; // This would cause an error in C#
La diferencia entre el tipado dinámico y estático radica en la flexibilidad frente a la seguridad de tu código. Los lenguajes de tipado dinámico ofrecen flexibilidad pero a costa de potenciales errores en tiempo de ejecución.

Los lenguajes de tipado estático imponen reglas más estrictas que pueden prevenir ciertos errores, pero requieren más declaración inicial y ofrecen menos flexibilidad en el cambio de tipos.

*/




let example = "Hello";


console.log(typeof example);
console.log("La variable exsmple de tipo " + typeof example + " tiene el valor de " +example);


console.log("**********************")
example = 42;
console.log("Ahora example fue reasignado con otro tipo de dato y valor ");
console.log("El nuevo tipo es: " + typeof example+ ".");

console.log("El nuevo valor de la variable example es : " + example);


let exampleVariable = null;
console.log(typeof exampleVariable); // "object"



console.log("===========");

console.log(typeof null);


console.log("===========");
let info;
console.log(typeof info);


console.log("===========");
console.log(typeof NaN);

/*

BigInt: Cuando el número es demasiado grande para el tipo de dato Number, se puede usar el tipo de dato BigInt para representar enteros de longitud arbitraria.
Al agregar una n al final del número, puedes crear un BigInt.

*/
console.log("===========");

const veryBigNumber = 1234567890123456789012345678901234567890n;

console.log(typeof veryBigNumber);



console.log("================");
let hello = "Hello";
hello += " world";
console.log(hello);

console.log(hello);