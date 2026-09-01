

//=============CADENAS===================


let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Do



//CONCAT +=
fullName+=" Dell";
console.log(fullName);



//Aquí tienes un ejemplo de cómo usar el método concat() para unir dos cadenas de texto:

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World



console.log("\n=======================")



//La notación de corchetes usa corchetes ([]) y el índice del carácter que deseas acceder. Veamos un ejemplo:
let greeting = "hello";
console.log(greeting[1]); // "e"



console.log(greeting.length);

//accedo al ultimo elemento de la cadena

console.log(greeting[greeting.length-1]);

console.log("\n=======================")

let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);



let statement = "She said, \"Hello!\" " ;

console.log(statement);



/****
 * 
 ¿Qué son los literales de plantilla y qué es la interpolación de strings?
En JavaScript, los literales de plantilla son una forma poderosa y flexible de trabajar con cadenas. 
A diferencia de las cadenas normales, que usan comillas simples (') o dobles ("), 
los literales de plantilla se definen con comillas inversas (`).
 *   */


console.log(` ¿Qué son los literales de plantilla y qué es la interpolación de strings?
En JavaScript, los literales de plantilla son una forma poderosa y flexible de trabajar con cadenas. 
A diferencia de las cadenas normales, que usan comillas simples (') o dobles ("), 
los literales de plantilla se definen con comillas inversas \`\ \`\ `);

//TENMPLATE


const name = "ARIEL ZARATE";
const greeting2 = `Hello, ${name}!`;

console.log(greeting2);


console.log("\n=======================")

// concatenacion con signo + sin literales
const age = 39;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); 



//Literales con comillas invertidas 


const message2 = `My name is ${name} and I am ${age} years old.`;
console.log(message2); 


console.log("\n=======================")


/**
 Como puedes ver, la interpolación de strings con literales de plantilla es mucho más limpia y fácil de leer, 
 especialmente cuando trabajas con múltiples variables.

 Otra gran característica de los literales de plantilla es que soportan cadenas multilínea. 
 Con las cadenas normales, necesitarías usar caracteres de escape (\n) para crear nuevas líneas. Con los literales de plantilla, simplemente puedes escribir la cadena en varias líneas, y el formato se preserva:
 
 
 
 */



console.log(`
 Como puedes ver, la interpolación de strings con literales de plantilla es mucho más limpia y fácil de leer, 
 especialmente cuando trabajas con múltiples variables.

 Otra gran característica de los literales de plantilla es que soportan cadenas multilínea. 
 Con las cadenas normales, necesitarías usar caracteres de escape (\n) para crear nuevas líneas. Con los literales de plantilla, simplemente puedes escribir la cadena en varias líneas, y el formato se preserva:
  \n`);



 let phrase = `Las brujas de salem,
nunca fueron brujas 
y fueron condenadas 
de forma injusta 
por un pastor protestante 
en 1889.`;

console.log(phrase);


console.log("\n=======================")



const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${(score / highestScore) * 100}%.`;
console.log(output); 




console.log("\n=======================")


/**
 Para localizar la posición de una subcadena dentro de una cadena, puedes usar el método indexOf(). El método indexOf() en JavaScript te permite buscar una subcadena dentro de una cadena.

Si la subcadena se encuentra, indexOf() devuelve el índice (o posición) de la primera ocurrencia de esa subcadena. Si la subcadena no se encuentra, indexOf() devuelve -1, lo que indica que la búsqueda no tuvo éxito.

El método indexOf() toma dos argumentos: el primero es la subcadena que deseas encontrar dentro de la cadena más grande, y el segundo es una posición de inicio opcional para la búsqueda. Si no proporcionas una posición de inicio, la búsqueda comenzará desde el inicio de la cadena.
 * 
 */



console.log(` Para localizar la posición de una subcadena dentro de una cadena, puedes usar el método indexOf(). El método indexOf() en JavaScript te permite buscar una subcadena dentro de una cadena.

Si la subcadena se encuentra, indexOf() devuelve el índice (o posición) de la primera ocurrencia de esa subcadena. Si la subcadena no se encuentra, indexOf() devuelve -1, lo que indica que la búsqueda no tuvo éxito.

El método indexOf() toma dos argumentos: el primero es la subcadena que deseas encontrar dentro de la cadena más grande, y el segundo es una posición de inicio opcional para la búsqueda. Si no proporcionas una posición de inicio, la búsqueda comenzará desde el inicio de la cadena.
 * `);

let sentence = "JavaScript es sorprendente!";
let position = sentence.indexOf("sorprendente");
console.log(position); // 14


console.log("\n=======================")

let sentence2 = "JavaScript is awesome!";
let position2 = sentence2.indexOf("fantastic");
console.log(position2); // -1

console.log(`Usar indexOf() puede ser muy útil cuando necesitas verificar si una subcadena está presente en una cadena y 
    determinar su posición para realizar operaciones adicionales.`)

console.log("\n======================")

console.log("\n======================");




