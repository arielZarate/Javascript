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

  let estado = false;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === n) {
        estado = true;
        console.log(
          "la suma de los dos posiciones dan en el indice i:" +
            i +
            " y el j:" +
            j +
            " " +
            " dan " +
            parseInt(array[i] + array[j]) +
            //  parseInt(array[j]) +
            "  lo cual es igual a valor ingresaso " +
            n
        );
        break;
      }
    }
  }

  console.log(estado);
}

module.exports = {
  sumArray,
};