/* 
Selection Sort
Algoritmo en la línea de los anteriores en cuanto a complejidad. 
El procedimiento recorre el conjunto buscando el elemento de menor valor 
para intercambiarlo inmediatamente con el de la primera posición. De forma recursiva, 
se continúan buscando aquellos los siguientes elementos de menor valor para intercambiarlo
 con sus posiciones finales.

Más información aquí: https://en.wikipedia.org/wiki/Selection_sort

*/

function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    for (var i = 0; i < array.length; i++) {
        //set min to the current iteration of i
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        var temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}