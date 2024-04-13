/* Funciones js */

contador = 0;

//=======sumar restar =========

const sumar = () => {
    contador++;
    alert(contador);
};

const restar = () => alert(contador--);

/* operaciones */

const operaciones = (op) => {
    op == "+" ? contador++ : contador--;

    //alert(contador);
    console.log(contador);
};

//********Events */

function handlerInput() {
    console.log("estas apretando una tecla ...🦖🦖 ");
    alert("estas apretando una tecla ...🦖🦖 ");
}

function handlerInput2() {
    console.log("estas apretando una tecla ...🦖🦖 ");
    alert("estas apretando una tecla ...🦖🦖 ");
}

function handlerEvent(e) {
    //console.log(e);

    const valor = e.target.value;
    console.log("El value es:" + valor);
    //console.log("estas apretando una tecla ...🦖🦖 ");
    //alert("estas apretando una tecla ...🦖🦖 ");
}

/* 
ASYNC : EL METODO oninput funciona de modo asincronico 
SYNC : EL METODO onkeypress funciona de modo sincronico, espera una respuesta  

*/

function handlerEvent2(e) {
    const valor = e.target.value;
    console.log("El value es:" + valor);
}

/* calculadora */

let numero1 = 0;
let numero2 = 0;

entrada = (e) => {
    e.id === "num1" ?
        (numero1 = parseInt(e.target.value)) :
        (numero2 = parseInt(e.target.value));
    //console.log(e.target.value);

    //console.log(numero1);
    //console.log(numero2);
};

const calculadora = (op) => {
    switch (op) {
        case "+":
            alert(numero1 + numero2);
            break;

            //document.getElementsByTagName("rtdo");
        case "-":
            alert(numero1 - numero2);
            break;
        case "*":
            alert(numero1 * numero2);
            break;
        case "/":
            numero2 == 0 ?
                alert("no se puede dividir por cero") :
                alert(numero1 / numero2);

            break;

        default:
            "opcion incorrecta";
            break;
    }
};