const array = require("../datos para consumir/array_datos2");

/* 1 funcion que me devulva la edad mayor  */

const mayor1 = function() {
    maximo = 0;
    for (let i of array) {
        //if (this.maximo < i.edad) this.maximo = i.edad;
        if (i.edad > this.maximo) {
            this.maximo = i.edad;
        }
    }

    console.log(maximo);
    return maximo;
    //return maximo;
};

function mayor2() {
    const aux = [];
    for (const iterator of array) {
        //ahora guardo todos los precios en un array

        aux.push(iterator.cotizacionCompany);
    }

    //esto devuelve el precio mas alto de todos los del array
    console.log(Math.max(...aux));
    return Math.max(aux);
}

function menor() {
    const aux = [];
    for (const iterator of array) {
        //ahora guardo todos los precios en un array

        aux.push(iterator.cotizacionCompany);
    }

    //esto devuelve el precio mas alto de todos los del array
    console.log(Math.min(...aux));
    return Math.min(aux);
}

menor2 = () => {
    minimo = 99999999;
    for (let i of array) {
        //if (this.maximo < i.edad) this.maximo = i.edad;
        if (i.cotizacionCompany < this.minimo) {
            this.maximo = i.cotizacionCompany;
        }
    }

    console.log(minimo);
    return minimo;
    //return maximo;
};