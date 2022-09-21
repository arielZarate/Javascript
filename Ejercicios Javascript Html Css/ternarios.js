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

const mayor = function(edad1, edad2) {
    //  let edad1 = parseInt(prompt("ingrese su edad"));
    // let edad2 = parseInt(prompt("ingrese su edad "));

    //operador ternario
    edad1 > edad2 ? // document.write(`El usuario de mayor edad tiene   ${edad1}  años`) ||
        console.log(`mayor: ${edad1}`) : //document.write(`El usuario de mayor edad tiene   ${edad2}  años`) ||
        console.log(`mayor: ${edad2}`);
};

mayor(22, 45);