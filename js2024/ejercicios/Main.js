const { MenorMayor } = require("./ej1");
const { stringMasLarga } = require("./ej2");
const { buscarAmigo } = require("./ej3");
const { sumArray } = require("./ej4");
const { pluck } = require("./ej5");
const { crearClasePersona } = require("./ej6-7-8");
const { filtrar } = require("./ej9");
//ejercicio1
console.log("\n");
let array = [4, 6, 1, -78, 7, 15, 78979879, -87897];
MenorMayor(array);

//ejercicio2
console.log("\n");
let array_string = [
  "hi",
  "hello",
  "ni hao",
  "guten tag",
  "rocio pagate la birra ",
];

stringMasLarga(array_string);

//ejercicio3
console.log("\n");
var amigos = [
  { nombre: "toni", edad: 33 },
  { nombre: "Emi", edad: 25 },
];

buscarAmigo(amigos, "joan");

//ejercicio 4
console.log("\n");

let array2 = [2, 5, 7, 12, 11, 15, 20, 3, 2, 0, -2, 44, 85, 74];
sumArray(array2, 20);

//ejercicio 5

console.log("\n");

var productos = [
  { nombre: "TV LCD", precio: 100 },
  { nombre: "Computadora", precio: 500 },
  { nombre: "Celular", precio: 150 },
  { nombre: "Tableta", precio: 200 },
];

const array_pluck = pluck(productos, "nombre");

console.log("los datos del array son : \n", array_pluck);

//ejercicio 6-7-8

console.log("\n");
console.log("Ejercicio 6-7-8");
let Persona = crearClasePersona();

let persona1 = new Persona(
  "Juan",
  30,
  ["correr", "dormir", "nadar"],
  [
    { nombre: "Martin", edad: 48 },
    { nombre: "Toni", edad: 27 },
    { nombre: "Emi", edad: 25 },
    { nombre: "Ricardo", edad: 27 },
    { nombre: "Laura", edad: 39 },
  ]
);

persona1.addFriend("Rocio", 32);
persona1.addHobby("Comer");
console.log(persona1.getFriends());

console.log(persona1.getHobbies());

console.log(persona1.getPromedioEdad());

//ejercicio 9

console.log("\n");
console.log("Ejercicio 9");

// Ejemplo de uso
var productos = [
  { price: 100, name: "tv" },
  { price: 50, name: "phone" },
  { price: 30, name: "lamp" },
];

// Ejecutar la función para agregar `filtrar` al prototipo de Array, pasando la función de comparación
filtrar(function (p) {
  return p.price >= 50;
});

// Usar la nueva función `filtrar` en el prototipo de Array
var productosFiltrados = productos.filtrar();

console.log(productosFiltrados);
