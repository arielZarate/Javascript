//fncion de pase un numero de  binacrio a decimal

const binario_a_Decimal = function(binario) {
    /*  
                                                                                        
                                                                                        //PRIMERA OPCION
                                                                                        let x = parseInt(num, 2);

                                                                                          console.log(x);
                                                                                          return x; 
                                                                                          
                                                                                          */

    //SEGUNDA OPCION

    let decimal = 0;
    for (let i = 0; i < binario.length; i++) {
        // acumula lo de suma + lo de binario en la posicion del indice
        //multiplicado por 2 a la potencia del

        // op1
        // decimal += +binario[i] * 2 ** (binario.length - 1 - i);

        //opcion2         //Math.pow(num,exponente)-
        decimal += +binario[i] * Math.pow(2, binario.length - 1 - i);
    }

    console.log(decimal);
    return decimal;
};

const decimal_a_Binario = function(num) {
    let almacenador = [];

    while (num !== 0) {
        // 1. Redondear al entero inferior
        // para que div no sea un número decimal
        let div = Math.floor(num / 2);
        let residuo = parseInt(num % 2);
        // 2. Ahora num será igual a div, si no es así
        // se produce un bucle infinito
        num = div;
        //console.log(`El Div es: ${div} y el Residuo:${residuo}`);
        almacenador.push(residuo);
    }

    console.log(almacenador);

    //aca convierto lo que esta en array a string sacandole las comas
    console.log(almacenador.join("").toString());

    //aca dejo el return por si es necvesario ser usado por otra funcion o variable
    return almacenador;
};

decimal_a_Binario(5);
//binario_a_Decimal("1101");