/**
 
Construye un Bot de Trivia en JavaScript
Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.

Historias de usuario:

Debes registrar en la consola "Hello! I'm your coding fun fact guide!" como un mensaje de saludo para el usuario.
Debes crear tres variables: botName, botLocation y favoriteLanguage, que almacenan el nombre del bot, de dónde es y su lenguaje de programación favorito, respectivamente.
Debes registrar en la consola "My name is (botName) and I live on (botLocation).".
Debes registrar en la consola "My favorite programming language is (favoriteLanguage).".
Debes usar let para crear una variable codingFact y asignarle una cadena que sea un dato curioso sobre el lenguaje de programación favorito del bot, usando la variable favoriteLanguage.
Debes registrar la variable codingFact en la consola.
Debes reasignar la variable codingFact a un nuevo dato curioso sobre el lenguaje de programación favorito del bot usando nuevamente la variable favoriteLanguage.
Debes registrar la variable codingFact en la consola otra vez.
Debes reasignar la variable codingFact a un tercer dato curioso sobre el lenguaje de programación favorito del bot usando nuevamente la variable favoriteLanguage.
Debes registrar la variable codingFact en la consola por tercera vez.
Debes registrar en la consola "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." como una despedida del bot.

 * 
 */

console.log("Hello! I'm your coding fun fact guide!");



// 3 variables
let botName="Ariel Zarate";
let botLocation="Argentina"; 
let favoriteLanguage="javascript";

console.log("My name is " + botName+" and I live on "+ botLocation+ ".");

console.log("My favorite programming language is "+ favoriteLanguage+".");


//5 
let codingFact = favoriteLanguage + " es perezoso.";

console.log(codingFact);

codingFact = favoriteLanguage + " fue creado en 1995.";

console.log(codingFact);


//8 9 10
codingFact=favoriteLanguage + " es debilmente tipadpo";

console.log(codingFact);

//11

console.log("It was fun sharing these facts with you. Goodbye! - " + botName+ " from " + botLocation +".");


