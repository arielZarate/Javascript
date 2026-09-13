
/***
 * 
 * 
 * Al trabajar con cadenas de texto en JavaScript, es común encontrar espacios en blanco no deseados al principio o al final de una cadena.
 *  Los espacios en blanco pueden interferir con operaciones como comparación, almacenamiento o visualización, 
 * por lo que es importante saber cómo eliminarlos eficientemente.

En esta lección, exploraremos cómo puedes eliminar espacios en blanco usando los métodos trim(), trimStart() y trimEnd() de JavaScript.
 */


let greeting = "   Hello  ";


//usando el metodo trim() para eliminar espacios en blanco al principio y al final de la cadena
let trimmedGreeting = greeting.trim();
console.log(trimmedGreeting); // "Hello"



//usando el metodo trimStart() para eliminar espacios en blanco al principio de la cadena
let trimmedStartGreeting = greeting.trimStart();
console.log(trimmedStartGreeting); // "Hello   "



//usando el metodo trimEnd() para eliminar espacios en blanco al final de la cadena
let trimmedEndGreeting = greeting.trimEnd();
console.log(trimmedEndGreeting); // "   Hello 