// Fromas de acceder html desde el window  y document

/* 

console.log(window);
console.log(window.document);
console.log(document);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log();
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo</h2>");

*/

/* Como acceder las etiquetas */
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("lista"));

/* Todos estos fueron reemplazados potr QuerySelector */

console.log(document.querySelector("#lista")); //busca el id

let lista = document.querySelector("#lista");
console.log(lista);

document.querySelectorAll("a").forEach((element) => {
    console.log(element);
});