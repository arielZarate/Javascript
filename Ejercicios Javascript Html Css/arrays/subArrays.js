/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumArray(array, n) {
    // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
    // entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
    // dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.

    // Ej:
    // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
    // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
    // Pista: Podes usar bucles/ciclos anidados
    // Aclaración: No es válido sumar el mismo número dos veces
    // Ej:
    // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
    // por lo tanto también debería devolver false en este caso

    // Tu código aca :

    //amoooo a google

    const size = array.length;

    for (let i = 0; i < size; i++) {
        const a = array[i];

        for (let j = 0; j < size; j++) {
            if (i === j) continue;
            const b = array[j];
            if (a + b === n) return true;
        }
    }

    return false;
}

// No modifiques nada debajo de esta linea //