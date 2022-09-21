/* 
Insertion Sort
Este algoritmo, tan sencillo como poco eficiente, trabaja analizando de forma secuencial 
cada elemento para trasladarlo a su posición correcta dentro del conjunto desplazando al resto.

Más información aquí: https://en.wikipedia.org/wiki/Selection_sort

*/
function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:

    //MAS DIFICIL DE ENTENDER LA LOGICA

    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        console.log("indice j  --->", j);
        let temp = array[i];
        console.log("array[i]", temp);
        console.log("array[j]", array[j]);
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];

            j--;
            console.log(j);
        }
        array[j + 1] = temp;
        console.log("array[j+1]:", temp);
    }

    console.log(array);
    return array;
}