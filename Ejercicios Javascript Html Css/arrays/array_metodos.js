/**
 * =================================
 * 4 ejercicio ARRAYS
 * ===================================
 *
 */

const array = function() {
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

    const jsonMarvel = JSON.stringify(superLiga);
    console.log("formato JSON \n");
    console.log(jsonMarvel);
};

//=================llmada a funciones============

array();