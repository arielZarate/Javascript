/**
 *
 *=================================
=============funciones=============

/* se escribe la palabra reservada function seguido del nombre de la funcion 

al final se llama la function
 * 
 */

/*
function PedirDatos() {
   let nombre = prompt("ingrese su nombre");
  let edad = prompt("ingrese su edad");
  let dni = prompt("ingrese su dni");

  let info = `su nombre es  + ${nombre} + su edad es  ${edad}  y su dni: ${dni}`;

  return info;
  // document.write(info);
}

//segubda forma de escribir una function , mas cercana a un callBack

const Imprimir = function () {
  const data = PedirDatos();
  // alert(data);
  //console.log(data)
  document.write(`${data}`);
};

Imprimir();

/*
=======FIN==========
====================
*/

/**
 * =================================
 * Segundo ejercicio
 * ===================================
 *
 */

//calcular el area de un circulo :D (PI *(R*R)/2)

/*
const areaCirculo = function () {
  // const radio = parseFloat(prompt("ingrese el valor del radio"));
  const rtdo = Math.PI * radio * radio;

  console.log(`El area de un circulo es ${rtdo}`);

  document.write(rtdo);
  /*
=======FIN==========
====================
*/

/*
luego borrar esta liena  
};*/

/**
 * =================================
 * tercer ejercicio
 * ===================================
 *
 */
//==============================================================================
//===========condicionales  IF-ELSE   TERNARIOS==============================
//calular el mayor de los ingresados

/*
const mayor = function () {
   let edad1 = parseInt(prompt("ingrese su edad"));
  let edad2 = parseInt(prompt("ingrese su edad "));

  //operador ternario
  edad1 > edad2
    ? document.write(`El usuario de mayor edad tiene   ${edad1}  años`) ||
      console.log(`mayor: ${edad1}`)
    : document.write(`El usuario de mayor edad tiene   ${edad2}  años`) ||
      console.log(`mayor: ${edad2}`);
  /*
=======FIN==========
====================
*/

/* 
luego borrar esta liena
};  */

/**
 * =================================
 * 4 ejercicio ARRAYS
 * ===================================
 *
 */

const array = function () {
  const marvel = [
    "Hulk",
    "Capitan America",
    "Iron Man",
    "Spiderman",
    "Infinit",
    "agent Romano",
    "Thor",
  ];

  const liga = [
    "batman",
    "robin",
    "superman",
    "acuaman",
    "robin",
    "birtman",
    "mujer-Maravilla",
  ];
  //proipiedades del array
  console.log("cantidad de elementos del array \n"); //cantidad de elementos
  console.log(marvel.length); //cantidad de elementos

  console.log("accediendo al ultimo elemento:\n "); //accedo al elemento del arraY
  console.log(marvel[6]); //accedo al elemento del arraY
  console.log(marvel[marvel.length - 1]); //accedo al elemento del arraY

  //agrego algun elemento

  marvel.push("batman", "superman");
  console.log("Elementos Agregados con push():");
  console.log(marvel);
  console.log("Elementos Formateados con Join():");
  console.log(marvel.join(" - "));

  // pop elimina el ultimo  alemento

  console.log(marvel);
  marvel.pop();
  console.log("Ultimo elemento elminado con pop(): ");
  console.log(marvel);

  //shift : elimina el primer elemento
  marvel.shift();
  console.log("==>Primer Elemento Eliminado con shitf():\n");
  console.log(marvel);

  //reverse invierte el orden
  marvel.reverse();
  console.log("Elementos en orden inverso con inverse():\n");
  console.log(marvel);

  //sort ordena los elementos del array
  marvel.sort();
  console.log("Elementos ordenados por orden alfabetico, con sort(): \n");
  console.log(marvel);

  //concatenar 2 arrays

  const superLiga = marvel.concat(liga);
  console.log("dos arrays concatendos \n");
  console.log(superLiga);

  //pasar a JSon

  const jsonMarvel = JSON.parse(superLiga);
  console.log("formato JSON \n");
  console.log(jsonMarvel);
};

//=================llmada a funciones============

//areaCirculo();

//mayor();

array();
