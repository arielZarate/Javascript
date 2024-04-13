//mostrando for con Quokka

function mostrarDatosXFor(param, array) {
    //muestro los datos que son mayores a algo
    for (let i = 0; i < array.length; i++) {
        array[i] > param ?
            console.log(array[i]) :
            console.log("No esmayor: ", array[i]);
    }
}

let array = [
    23, -11, 3454, 7667, 323, 56, 88, 213, 3454, 12, 22, 14, 4, 66, 78, 9999, 353,
];

//console.log(mostrarDatosXFor(40, array));
mostrarDatosXFor(40, array);

console.log("


        ");