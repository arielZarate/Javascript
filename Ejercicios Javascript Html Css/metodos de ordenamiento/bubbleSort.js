/* 
Bubble Sort
La ordenación de burbuja presenta un esquema muy básico en el que se trabajan los elementos 
de un conjunto por pares. Cada elemento se compará así con su inmediato sucesor para ordenarse 
según sea mayor o menor que este. Una vez la pareja está ordenada correctamente, 
se toma el último número de cada tupla para volver a compararlo con el siguiente.

Más información aquí: https://en.wikipedia.org/wiki/Bubble_sort

*/

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    //[5,15,5,2]
    /*   if (array[i] > array[i + 1]) {
                                                                                                                                                          let aux = array[i];
                                                                                                                                                          array[i] = array[i + 1];
                                                                                                                                                          array[i + 1] = aux;
                                                                                                                                                      } */

    for (let i = 0; i < array.length - 1; i++) {
        console.log(
            "en el 1er for el i es: ",
            i,
            " y recorre el array.length -1 : ",
            array.length - 1
        );
        for (let j = i + 1; j < array.length; j++) {
            console.log(
                "en el 2do for j= i+1 es: ",
                j,
                " y recorre el array.length : ",
                array.length
            );

            if (array[i] > array[j]) {
                console.log("");
                console.log("pregunta si ", array[i], ">", array[j]);
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;

                console.log("");
                console.log("orden :", array);
            }
        }
    }
    return array;
}