/**
 Paso 1
En este taller, vas a continuar aprendiendo sobre cadenas creando un Chatbot de Profesor.

Para comenzar, añade una declaración de console, con el mensaje de "Hi there!".
 */

console.log("Hi there!");


/*
PASO 2
Ahora es el momento de establecer el nombre del bot.

Cree una variable llamada botName y asígnele el valor de cadena "teacherBot".
*/


let botName="teacherBot";


/**
 *Paso 3
Ahora es momento de crear un saludo usando la variable botName.



Comienza creando una variable llamada greeting.

A continuación, usando la sintaxis de literales de plantilla, asigna una cadena que diga My name is, seguida de la variable botName y terminando con un punto (.).

Finalmente, registra la variable greeting en la consola.


 */

let greeting=`My name is ${botName}.`;

console.log(greeting);


/**
 * 
 * Paso 4
El siguiente paso es crear algunas variables más que se utilizarán en futuros mensajes de bot.

Crea una variable llamada subject y asígnale el valor de cadena "JavaScript".

Luego, crea una variable llamada topic y asígnale el valor de cadena "strings".
 */

let subject="JavaScript";

let topic="strings";




/**
 * 
Consola
Paso 5
Ahora, es momento de usar las variables que creaste en el paso anterior.



Usando la sintaxis de literales de plantilla, asigna la cadena de texto Today, you will learn about [topic variable goes here] in [subject variable goes here]. a la variable sentence.

Reemplazarás los marcadores [topic variable goes here] y [subject variable goes here] con las variables topic y subject usando la sintaxis ${}.

Finalmente, registra la variable sentence en la consola
 */


let sentence=`Today, you will learn about ${topic} in ${subject}.`;


console.log(sentence);



/**
 * 
 Paso 6
Para esta próxima parte del proyecto, el bot enseñará a trabajar con la propiedad de cadena length.

Comienza creando una nueva variable llamada strLengthIntro.

Luego usa la sintaxis de literales de plantilla para asignar la cadena Here is an example of using the length property on the word [subject]. a la variable strLengthIntro.

Reemplaza [subject] con la variable subject como lo hiciste antes.

Finalmente, imprime la variable strLengthIntro en la consola
 */

let strLengthIntro=`Here is an example of using the length property on the word ${subject}.`;



/**
 Paso 7
Para obtener la longitud de una cadena, puedes utilizar la propiedad length. Esta propiedad devuelve el número de caracteres en una cadena.

// Output: 13
console.log(greeting.length);
Empieza utilizando la propiedad length para obtener la longitud de la cadena subject y registra ese valor en la consola.
 */


console.log(subject.length);



/**
 
Paso 8
Ahora es el momento de obtener la longitud de la cadena topic.


Comienza mostrando el mensaje Here is an example of using the length property on the word [topic]. en la consola.

Recuerda reemplazar [topic] con la variable topic, y usar la sintaxis correcta de literales de plantilla como hiciste en los pasos anteriores.

Luego, agrega una segunda sentencia console.log que muestre la longitud de la cadena topic en la consola.
 */

console.log(`Here is an example of using the length property on the word ${topic}.`);

console.log(topic.length);


/**Paso 9
La siguiente parte de este taller es revisar el acceso a caracteres de una cadena.

Comienza mostrando el mensaje Here is an example of accessing the first letter in the word [subject]. en la consola.

Recuerda reemplazar [subject] con la variable subject y usar la sintaxis adecuada de literales de plantilla como hiciste en los pasos anteriores. */

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);



/**Paso 10
En lecciones anteriores, aprendiste cómo acceder a caracteres en una cadena así:

Código de ejemplo
const firstName = "Jessica";
// returns "J"
firstName[0];
Recuerda que los números de índice comienzan en 0, por lo que la primera letra en una cadena siempre estará en el índice 0.

Comienza agregando otra declaración console.

Dentro de la declaración console, muestra la primera letra de la variable subject utilizando la notación de corchetes y el número de índice correcto. */

console.log(subject[0]);



/**
 * 
 * Paso 11
Now it is time to access the second letter of the subject variable.

Comienza añadiendo una instrucción de console que muestre el mensaje Here is an example of accessing the second letter in the word [subject]. Recuerda reemplazar [subject] con el valor actual de la variable subject y usar la sintaxis correcta de literales de plantilla.

Luego, añade otra instrucción de console que muestre la segunda letra de la variable subject usando notación de corchetes y el número de índice correcto.
 */



console.log(`Here is an example of accessing the second letter in the word ${subject}.`);

console.log(subject[1]);



/**
 * 
 * Paso 12
Ahora es el momento de acceder al último carácter de una cadena.

Empieza agregando otra declaración de console que muestre el mensaje Here is an example of accessing the last letter in the word [subject].

Recuerda reemplazar [subject] por el valor real de la variable subject y usa la sintaxis correcta de literales de plantilla.

 */


console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
console.log(subject[1]);


/**Paso 13
En lecciones anteriores, aprendiste cómo acceder al último carácter en una cadena así:

Código de ejemplo
const firstName = "Jessica";

// returns "a"
firstName[firstName.length - 1];
string.length - 1 siempre te dará el último número de índice para una cadena.

Crea una nueva variable llamada lastCharacter y asígnale el valor del último carácter en la variable subject.

Luego, muestra el valor de la variable lastCharacter en la consola. */




let lastCharacter=subject[subject.length-1];

console.log(lastCharacter);

/*
Paso 14
Para la última parte del taller, revisará cómo encontrar la posición del índice de una subcadena en una cadena. Recuerde que una subcadena es una parte de una cadena.

Comience creando una variable llamada learningIsFunSentence y asígnale el valor de cadena de "Learning is fun.".
*/



let learningIsFunSentence="Learning is fun.";

/**
 * 
 Paso 15
El siguiente paso es agregar otro statement console que muestre la cadena "Here are examples of finding the positions of substrings in the sentence.".
 */


console.log("Here are examples of finding the positions of substrings in the sentence.");


/**
 * 
 Paso 16
En lecciones anteriores, aprendiste cómo trabajar con el método indexOf así:

Código de ejemplo
const sentence = "I love to learn.";

// returns index 2
console.log(sentence.indexOf("love"));

// returns -1
console.log(sentence.indexOf("hate"));
Recuerda que el método indexOf devuelve la posición del índice de la primera aparición de una subcadena en una cadena. Si la subcadena no se encuentra, devuelve -1.

Agrega una nueva declaración de console que muestre el resultado de usar el método indexOf en la variable learningIsFunSentence para encontrar la posición del índice de la subcadena "Learning".
 */


console.log(learningIsFunSentence.indexOf("Learning"));



/**
 * 
 Paso 17
A continuación, agregará una nueva declaración de console que muestra el resultado de usar el método indexOf en la variable learningIsFunSentence para encontrar la posición de la subcadena "fun".

Debajo de esa declaración de console, agregue una nueva declaración de console que muestra el resultado de usar el método indexOf para encontrar la posición de la subcadena "learning".

Tenga en cuenta lo que muestra la última declaración de console.
 */

console.log(learningIsFunSentence.indexOf("fun"));

console.log(learningIsFunSentence.indexOf("learning"));



/**
 Paso 18
La última declaración de consola muestra -1 porque la subcadena "learning" no se encuentra en la oración "Learning is fun.

El método indexOf distingue entre mayúsculas y minúsculas. Por lo tanto, la subcadena "learning" no es lo mismo que la subcadena "Learning".

Ahora que entiendes cómo funcionan algunos métodos comunes de cadena, puedes completar el taller registrando un último mensaje en la console.

Agrega una declaración de console que muestre el mensaje "I hope you enjoyed learning today." en la console.

¡Y con ese mensaje final, has completado el taller!
 */

console.log("I hope you enjoyed learning today.");