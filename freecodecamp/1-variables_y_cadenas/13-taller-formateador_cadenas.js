/***
 * Paso 1
 * En este taller, practicarás trabajando con varios métodos de cadenas usados para formatear cadenas.
 *
 * Comienza creando una variable llamada userInput y asígnale el siguiente valor: "   Hello World!   ".
 */

let userInput = "   Hello World!   ";

/**
 * Paso 2
A continuación, agrega un console.log() con la cadena "Original input:".
 */
console.log("Original input:");

/**
 * Paso 3
 * A continuación, agrega un console.log() con la variable userInput.
 */
console.log(userInput);

/**
 * paso 4
 * Crea una variable llamada cleanedInput y asígnale el resultado de usar el método trim() en la variable userInput.
 */

let cleanedInput = userInput.trim();

/**
 *
 * paso 5
 * A continuación, agrega un console.log() con la cadena "Result of trimming whitespace from both ends:".
 */
console.log("Result of trimming whitespace from both ends:");

console.log(cleanedInput);

/***
 * paso 6
 * Crea una variable trimmedStart y asígnale el resultado de usar el método trimStart() en la variable userInput.
 */

let trimmedStart = userInput.trimStart();

/***
 * paso 7
 * Debajo de tu variable trimmedStart, agrega un console.log() con la cadena "After using the trimStart() method, leading spaces removed:".

Luego, debajo de ese console.log(), agrega otro console.log() con la variable trimmedStart.
 */

console.log("After using the trimStart() method, leading spaces removed:");

console.log(trimmedStart);

/***
 *
 * paso 8
 * Crea una variable llamada trimmedEnd y asígnale el resultado de usar el método trimEnd() en la variable userInput.
 */
let trimmedEnd = userInput.trimEnd();

/***
 * paso 9
 * Debajo de tu variable trimmedEnd, agrega un console.log() con la cadena "After using the trimEnd() method, trailing spaces removed:".

Luego, debajo de ese console.log(), agrega otro console.log() con la variable trimmedEnd.

 */

console.log("After using the trimEnd() method, trailing spaces removed:");

console.log(trimmedEnd);

/**
 *
 * paso 10
 * Crea una variable llamada upperCaseInput y asígnale el resultado de usar el método toUpperCase() en la variable cleanedInput.
 */

let upperCaseInput = cleanedInput.toUpperCase();

/**
 * paso 11
 *Debajo de tu variable upperCaseInput, agrega un console.log() con la cadena "Result of using the toUpperCase() method:".

Luego, debajo de ese console.log(), agrega otro console.log() con la variable upperCaseInput.
 *
 */

console.log("Result of using the toUpperCase() method:");

console.log(upperCaseInput);

/**
 * 
 * paso 12
 * 
 * Comienza creando una variable llamada lowerCaseInput y asígnale el resultado de usar el método toLowerCase() en la variable cleanedInput.

Luego registra la cadena "Result of using the toLowerCase() method:".

Finalmente, agrega otro console.log() para la variable lowerCaseInput.
 */

let lowerCaseInput = cleanedInput.toLowerCase();

console.log("Result of using the toLowerCase() method:");

console.log(lowerCaseInput);

/**
 * paso 13
 * Habrá ocasiones en las que necesitarás usar múltiples métodos para crear una nueva cadena. En los próximos pasos, usarás algunos de los métodos que has aprendido hasta ahora para crear una nueva cadena que use la convención de nombres camelCase.

Comienza creando una variable llamada lowercaseWord y asígnale la cadena "camelcase".

Debajo de esa variable lowercaseWord, crea otra variable llamada camelCasedVersion y asígnale una cadena vacía por ahora.

Debajo de esa variable camelCasedVersion, agrega un console.log() con la cadena "Camel cased version:" seguido de otro console.log() para la variable camelCasedVersion.
 */

let lowercaseWord = "camelcase";

let camelCasedVersion = "";

console.log("Camel cased version:");
console.log(camelCasedVersion);



/***
 * 
 * Paso 14
 Debes cambiar la asignación existente de camelCasedVersion reemplazando la cadena vacía con lowercaseWord.slice(0, 5).

Ahora deberías ver la palabra "camel" en la consola.
 */

camelCasedVersion = lowercaseWord.slice(0, 5);



/***
 * paso 15
 * La segunda palabra en la variable lowercaseWord es "case". Para acceder al c en esa palabra, puedes usar lowercaseWord[5].

Actualiza la asignación de camelCasedVersion para usar el operador + y concatenar lowercaseWord.slice(0, 5) con el resultado de usar el método correcto para convertir cadenas a mayúsculas en lowercaseWord[5].

Ahora deberías ver camelC en la consola.
 */



camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();


/***
 * paso 16
 * Actualiza la asignación camelCasedVersion para que también concatene lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() con el resultado de usar el método slice() en lowercaseWord. Pasa el número -3 al método slice().

 * 
 */

camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);