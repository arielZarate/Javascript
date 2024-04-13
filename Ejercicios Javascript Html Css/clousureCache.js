//vamso a simular una memoria cache
function creaFunc() {
    var nombre = "Mozilla";

    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

//ejecutamos el clousure miFunc
var miFunc = creaFunc();
//miFunc();

function creaSumador(x) {
    return function(y) {
        return x + y;
    };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2)); // muestra 7
console.log(suma10(2)); // muestra 12