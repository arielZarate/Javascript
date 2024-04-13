/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function menorMayor(numeros) {
    // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
    // 'numeros' en la posición 1.
    // Ej:
    // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
    // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
    // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

    //////////la opcion larga y tediosa/////////
    /* 
    
    let numeros = [-3,45,23,7,31,90,1];

function menorMayor(arreglo){
let menor = Infinity;//un número muy grande
let mayor = -Infinity;//un número muy pequeño
let resultado = [0,0];// el arreglo a devolver

for (let i = 0; i< numeros.length; i++){ 
 if (numeros[i] < menor){
 menor = numeros[i];// el nuevo valor de menor
 resultado[0] = menor;  
 }

 if (numeros[i] > mayor){
 mayor = numeros[i]; //el nuevo valor de mayor
 resultado[1] = mayor;
 }
}
return resultado;
}

console.log(menorMayor(numeros))
    
  ////////////////////////////////////////////////////////////  
    */

    // Tu código aca:
    //usando el operador spredd y la funcion min de Math

    return [Math.min(...numeros), Math.max(...numeros)];
}

// No modifiques nada debajo de esta linea //

module.exports = menorMayor;