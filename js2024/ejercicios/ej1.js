/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
// arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
// 'numeros' en la posición 1.
// Ej:
// menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
// ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
// y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

const MenorMayor = (array) => {
  let array_men_may = new Array(2).fill(0); // o newArray(2).fill(0);
  let menor = Infinity;
  let mayor = -99999999999999;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      array_men_may[0] = menor;
    }

    if (array[i] > mayor) {
      mayor = array[i];
      array_men_may[1] = mayor;
    }
  }

  console.log("menor|mayor: ", array_men_may[0], array_men_may[1]);

  array_men_may[0] = Math.min(...array);
  array_men_may[1] = Math.max(...array);
  console.log("menor|mayor ===2 opcion== : ", array_men_may);
};

//MenorMayor();

module.exports = { MenorMayor };
