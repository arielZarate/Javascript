/***
 * 
 * 
En programación, comprender cómo se representan los caracteres como números es fundamental. 
Aquí es donde entra en juego ASCII. ASCII, abreviatura de American Standard Code for Information Interchange,
 es un estándar de codificación de caracteres utilizado en computadoras para representar texto. Asigna un valor numérico a cada carácter, lo cual es reconocido universalmente por las máquinas.
 

ASCII es un sistema para codificar caracteres como letras, dígitos y símbolos en valores numéricos. Cada carácter se asigna a un número específico.

Por ejemplo, la letra mayúscula A está representada por el número 65 en ASCII, mientras que la minúscula a es representada por 97. Esta codificación permite a las computadoras almacenar y manipular texto.

El estándar ASCII cubre 128 caracteres, incluyendo:

Letras inglesas mayúsculas y minúsculas (A-Z, a-z).
Números (0-9).
Signos de puntuación y símbolos comunes (!, @, #, y así sucesivamente).
Caracteres de control (como nueva línea y tabulación).

 */



/*
En JavaScript, puedes acceder al código numérico de un carácter usando el método charCodeAt(). Este método devuelve la unidad de código UTF-16 del carácter en un índice especificado. 
Para los primeros 128 caracteres, este valor coincide con el código ASCII.

*/

let char = 'A';
let asciiCode = char.charCodeAt(0);
console.log(`El código ASCII de '${char}' es: ${asciiCode}`); // Salida: El código ASCII de 'A' es: 65


let arroba = '@';
let asciiCodeArroba = arroba.charCodeAt(0);
console.log(`El código ASCII de '${arroba}' es: ${asciiCodeArroba}`); // Salida: El código ASCII de '@' es: 64

/*
Además, puedes convertir un código ASCII de vuelta a su carácter correspondiente utilizando el método String.fromCharCode(). 
Este método toma uno o más valores numéricos y devuelve una cadena que representa los caracteres correspondientes.

*/

let code = 65;
let character = String.fromCharCode(code);
console.log(`El carácter correspondiente al código ASCII ${code} es: '${character}'`); // Salida: El carácter correspondiente al código ASCII 65 es: 'A'

let codeArroba = 64;
let characterArroba = String.fromCharCode(codeArroba);
console.log(`El carácter correspondiente al código ASCII ${codeArroba} es: '${characterArroba}'`); // Salida: El carácter correspondiente al código ASCII 64 es: '@'    



//otro

console.log(String.fromCharCode(66));
