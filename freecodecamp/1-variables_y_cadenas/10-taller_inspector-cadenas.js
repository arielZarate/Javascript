// declarar la variable fccSentence y asignarle la cadena de texto
let fccSentence = "freeCodeCamp is a great place to learn web development.";

//mostrar el resultado de la verificación

console.log("Here are some examples of the includes() method:");

//3 verificar si una cadena contiene una subcadena específica
let hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

//4 mostrar por consola  el mensaje con la variable usando literales de plantilla

console.log(
  `fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`,
);

//5 valida si esta la palabra "JavaScript" en la cadena fccSentence y asigna el resultado a la variable hasJavaScript

let hasJavaScript = fccSentence.includes("JavaScript");

console.log(
  `fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`,
);

//6 verifica si la cadena contiene la subcadena "freecodecamp" (en minúsculas) y asigna el resultado a la variable hasLowercaseFCC

let hasLowercaseFCC = fccSentence.includes("freecodecamp");

console.log(
  `fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`,
);


//7 slice() method to extract a part of the string
let message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");



//8 extract the word "freeCodeCamp" from the message string and assign it to the variable platform
let platform = message.slice(11, 23);


//9 show the result of the slice() method using template literals
console.log(`The word "${platform}" was sliced from the message.`);

//10 

let greetingWord= message.slice(0, 7);

console.log(`The first word is "${greetingWord}".`);

//11 register the last character of the message string and assign it to the variable endPunctuation 

let endPunctuation= message.slice(-1);

console.log(`The ending punctuation mark is a "${endPunctuation}"`);

//12 register the last word of the message string and assign it to the variable lastWord

console.log(`Workshop complete! You now know how to use includes() and slice().`);