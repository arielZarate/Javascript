//funcion que crea una persona

function Persona(nombre, apellido) {
    this.nombre = nombre || "Juan";
    this.apellido = apellido || "Perez";
} //fin de funcion

//ahora le agrego un prototype metodo()
Persona.prototype.getNombre = function() {
    return this.nombre + " " + this.apellido;
};

//creao mucho objetos de tipo  persona y ademas tengo un metodo getName dentro de ellos
var toni = new Persona("Toni", "Tralice");
var santi = new Persona("Santi", "Scanlan");
var guille = new Persona("Guille", "Aszyn");

console.log(toni.getNombre()); // funciona!
santi.getNombre(); // tambien!
guille.getNombre(); // :D