/* 
Quicksort
El algoritmo de ordenamiento rápido retoma de nuevo la aproximación del divide y vencerás: 
a partir de un elemento cualquiera de la lista, denominado pivote, resitua el conjunto 
restante a ambos lados según sus elementos sean mayores o menores que la muestra escogida. 
Este proceso se repite de forma recursiva hasta agotar una sublista, quedando con ello el conjunto ordenado.

Más información aquí: https://en.wikipedia.org/wiki/Quicksort
*/

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (array.length <= 1) {
        return array;
    } // Si la longitud de la matriz es menor que 1, devuelve la matriz directamente
    var left = []; // La matriz de la izquierda
    var right = []; // La matriz de la derecha
    // var pivotIndex = Math.floor(arr.length / 2); // Seleccione el punto de referencia, el método floor () es redondeado hacia abajo
    var pivotIndex = Math.floor(array.length / 2); // Seleccione el punto de referencia, el método floor () es redondeado hacia abajo
    var pivot = array.splice(pivotIndex, 1); // Matriz base
    for (var i = 0; i < array.length; i++) {
        // Luego comience a recorrer la matriz, los elementos más pequeños que "base" se colocan en el subconjunto izquierdo y los elementos más grandes que la base se colocan en el subconjunto derecho.
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right)); // Usa la recursión para repetir este proceso continuamente, puedes obtener la matriz ordenada.
}