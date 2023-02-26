/* 
==============================
fUNCIONES COMO DECLARARLAS
==============================
*/

//========== USA FUNCTION================
//1 FORMA DE DECLARAR: SIMPLE
function mensaje(arg) {
    console.log("Hola", arg);
}
//2 SEGUNDA FORMA :EXPRESSION
const mensaje2 = function() {
    console.log("Hola Mundo");

    //aca retorna el valor y puede usarse en otra llamada
    return "Hola Mundo ";
};

let mensaje = mensaje(); //aca llame a la funcion y guarde el valor enuna variable

//==========NO USA FUNCTION================
//3 FORMA declaracion:$ ARRROW FUNCTION

//Nota arrowFuncion te bidea el valor en el contexto que esta o existe ,
//ojo porque si es una funcion que esta fuera de objeto buscara en el scope y devolvera undefined
const mensaje3 = () => {
    //el return ya viene implicio
    "Hola mundo";
};

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