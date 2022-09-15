var person = {
    nombre: "Defecto",
    apellido: "Defecto",
}; // un objeto cualquiera

var manu = Object.create(person); // le paso el objeto que creamos
console.log(manu); // es un objeto
console.log(manu.__proto__); // es el objeto person que creamos al principio!!