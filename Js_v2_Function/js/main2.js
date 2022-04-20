/* 
==============================
fUNCIONES COMO DECLARARLAS
==============================
*/

//========== USA FUNCTION================
//1 FORMA DE DECLARAR: SIMPLE
function mensaje() {}
//2 SEGUNDA FORMA :EXPRESSION
const mensaje2 = function () {};

//==========NO USA FUNCTION================
//3 FORMA declaracion:$ ARRROW FUNCTION
mensaje3 = () => {};

/* 












==============================
fUNCIONES 
==============================
*/

function saludarUsuario() {
  const name = prompt("ingrese nombre");

  document.write(`Hola sr ${name}`);
}

function mostrarPares(vector) {
  //if (vector === "Object") {}
  pares = [];
  for (let index = 0; index < vector.length - 1; index++) {
    vector[index] % 2 == 0 ? pares.push(vector[index]) : null;
    //console.log("no hay pares");
    //document.write("no existen pares ");
  }

  //console.log(pares);
  document.write(pares);
}

//funcion cargar numeros y mostrarlos

function cargarArray(numero) {
  const numeros = [];
  for (let i = 0; i < numero; i++) {
    // const element = array[index];

    const num = parseInt(prompt("ingrese num"));
    numeros.push(num);
  }

  //============== (4) DISTINTAS SALIDAS===========================

  /* ENCONTRAR NODO */
  //const node = document.getElementById("mensaje");

  /* ESCRIBIR NODO */

  //node.innerHTML = numeros;

  //console.log(numeros);
  //alert(numeros);
  //document.write(numeros);

  /* 
================================
CONCEPTO IMPORTANTE: para comunicar dos funciones usamos el return

los valores que esta funcion retorna , pueden ser usados por otra funcion 

o ser alamacenados en variables para su uso posterior

ESTO TIENE GRAN IMPORTANTACIA :REUSABILIDAD - CALLBACK - DEPENDENCIAS:POR PARAMETROS
================================
*/

  //======return numeros=======
  return numeros;
}

//===========funcion imprimir numeros=================

//=======arrow function=============

const imprimir = (valores) => {
  if (valores === String) {
    //console.log("son objectos:\n" + valores);
    //document.getElementById("mensaje").innerHTML("valores");
    document.write("valores object:\n" + valores);
  } else if (valores instanceof Array) {
    document.write("valores Array:\n");
    for (let i = 0; i < valores.length; i++) {
      //console.log("Array:\n");
      document.write(valores[i]);
    }
  }
};
