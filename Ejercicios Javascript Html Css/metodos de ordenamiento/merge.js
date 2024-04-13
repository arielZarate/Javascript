/* 


Merge Sort
El algoritmo de ordenamiento por mezcla trabaja también mediante el concepto de sub listas. 
De este modo, el conjunto inicial se divide en dos sub conjuntos de aproximadamente igual tamaño
 para proceder a su ordenamiento de forma independiente. Finalmente, se mezclan ambos conjuntos para
  obtener el ordenamiento final.

  Más información aquí: https://en.wikipedia.org/wiki/Merge_sort

*/

//funcion adicional que necesita el merge para funcionar
function merge1(listA, listB) {
    let list = [];
    let i = 0;
    let j = 0;

    while (i < listA.length && j < listB.length) {
        if (listA[i] < listB[j]) {
            list.push(listA[i]);
            i++;
        } else {
            list.push(listB[j]);
            j++;
        }
    }

    while (i < listA.length) list.push(listA[i++]);
    while (j < listB.length) list.push(listB[j++]);

    return list;
}

/* function merge2(left, right) {
    var a = left.length;
    var b = right.length;
    if (a == 0) return right;
    if (b == 0) return left;
    var result = [],
        l = 0,
        r = 0;
    while (l + r < a + b) {
        if (l < a && (r == b || left[l] <= right[r])) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    return result;
} */

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if (array.length < 2) {
        return array;
    } else if (array.length > 1) {
        let n = array.length;
        let mitad = n / 2;
        return merge1(
            mergeSort(array.slice(0, mitad)),
            mergeSort(array.slice(mitad, n))
        );
    }
}