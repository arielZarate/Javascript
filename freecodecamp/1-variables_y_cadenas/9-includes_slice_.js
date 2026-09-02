/**
 * 
 
Al trabajar con cadenas en JavaScript, hay muchos casos en los que podría ser necesario verificar si una cadena contiene una subcadena específica, que es una parte más pequeña de esa cadena.
Por ejemplo, podrías querer verificar si la entrada de un usuario incluye una palabra o carácter específico antes de realizar alguna acción. Una forma de lograrlo es utilizando el método includes().
El método includes() se utiliza para verificar si una cadena contiene una subcadena específica. Si se encuentra la subcadena dentro de la cadena, el método devuelve true, de lo contrario, devuelve false
 */


console.log("Verificar si una cadena contiene una subcadena específica: \n =========METODO INCLUDES========= ");



let phrase = "JavaScript is awesome!";
console.log(phrase.includes("awesome")); // Devuelve true
console.log(phrase.includes("Python")); // Devuelve false

console.log(phrase.includes("Java")); // Devuelve true

//verioficar si esta ne cierta posicion

console.log("Verificar si 'awesome' está en la posición 13 o después: ");
let result = phrase.includes("awesome", 14); // Comienza a buscar desde el índice 0

console.log(result); // Devuelve false, ya que "awesome" no se encuentra después del índice 14

/**
 * 
 * Aquí, la búsqueda de la subcadena JavaScript comienza desde la séptima posición en la cadena, asegurando que omite cualquier carácter antes de esta posición.


 */

let message = "JavaScript is great!";
let result2 = message.includes("script");
console.log(result2);



/**
 * 
 ¿Cómo puedes extraer un subcadena de una cadena?
Al trabajar con cadenas en JavaScript, a menudo necesitas extraer una porción o subcadena de una cadena más grande.

Por ejemplo, podrías querer extraer parte de una palabra, una secuencia de caracteres específica o solo un fragmento de una oración.

JavaScript proporciona varios métodos para esta tarea, siendo uno de los más utilizados el método slice().

El método slice() te permite extraer una porción de una cadena y devuelve una nueva cadena, sin modificar la cadena original. Toma dos parámetros: el índice de inicio y el índice de fin opcional.
 */


console.log("\nExtraer una subcadena de una cadena: \n =========METODO SLICE========= ");

let text = "JavaScript is awesome!";
let subString = text.slice(0, 10); // Extrae desde el índice 0 hasta el índice 10 (sin incluir el índice 10)
console.log(subString); // Devuelve "JavaScript"



//Si omites el segundo parámetro, slice() extraerá todo desde el índice de inicio hasta el final de la cadena:


let subString2 = text.slice(11); // Extrae desde el índice 11 hasta el final de la cadena
console.log(subString2); // Devuelve "is awesome!"  




//También puedes usar números negativos como índices. Cuando usas un número negativo, se cuenta hacia atrás desde el final de la cadena:

let message2 = "JavaScript is fun!";
let lastWord = message2 .slice(-4);

console.log(lastWord);  // fun!