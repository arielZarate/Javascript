// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
}

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:

    return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}

function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:

    const nuevoarray = [];
    for (let index = 0; index < array.length; index++) {
        nuevoarray[index] = array[index] + 1;
    }

    return nuevoarray;
}

function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:

    array.push(elemento);

    return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:

    array.unshift(elemento);
    ///OJO CON  ESTO DEBO DEVOLVER EL ARRAY SOLO
    return array;
}

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:

    /*  var array = palabras;
                        var cadena = " ";

                        for (let index = 0; index < array.length; index++) {
                            cadena += array[index] + " ";
                        }

                        return cadena; */

    return palabras.join(" ");
}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:

    if (array.includes(elemento)) {
        return true;
    } else {
        return false;
    }
}

function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:

    let suma = 0;

    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }

    return suma;
}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let numeros = resultadosTest;
    let suma = 0;

    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }

    return suma / numeros.length;
}

function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let mayor = -999999;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > mayor) {
            mayor = numeros[index];
        }
    }
    return mayor;
}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:

    if (arguments.length < 1) return 0;
    var total = 1;
    for (var i = 0; i < arguments.length; i++) {
        total = total * arguments[i];
    }
    return total;
}

function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    let contador = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > 18) {
            contador++;
        }
    }

    return contador;
}

function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
    //Escribe tu código aquí
    var mensaje = "";
    switch (numeroDeDia) {
        case 1:
            mensaje = "Es fin de semana";
            break;
        case 2:
            mensaje = "Es dia Laboral";
            break;
        case 3:
            mensaje = "Es dia Laboral";
            break;
        case 4:
            mensaje = "Es dia Laboral";
            break;
        case 5:
            mensaje = "Es dia Laboral";
            break;
        case 6:
            mensaje = "Es dia Laboral";
            break;
        case 7:
            mensaje = "Es fin de semana";
            break;

        default:
            "Ha ingresado un numero de dia invalido";
    }
    return mensaje;
}

function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí

    var str = n.toString();

    // console.log(str);
    if (str[0] === "9") {
        return true;
    } else {
        return false;
    }
}

function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí

    /*  for (let index = 0; arreglo < array.length; index++) {
                      if (arreglo[i] !== arreglo[i + 1]) {
                          return false;
                      } else {
                          return true;
                      }
                  } */

    for (var i = 0; i < arreglo.length - 1; i++) {
        // el primero llega hasta alñ final -1
        if (arreglo[i] !== arreglo[i + 1]) {
            //el segundo compara hasta  el final
            return false;
        }
    }
    return true;
}

function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    /*


             ==========mi codigo   , a mi me  anda pero el test da mal============
            var nuevoArray = [];
            const buscados = ["Enero", "Marzo", "Noviembre"];
            for (let index = 0; index < array.length; index++) {
                if (buscados.includes(array[index])) {
                    nuevoArray.push(array[index]);
                } else {
                    return "No se encontraron los meses perdidos";
                }
            }

            return nuevoArray; */

    var nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (
            array[i] === "Enero" ||
            array[i] === "Marzo" ||
            array[i] === "Noviembre"
        ) {
            nuevoArray.push(array[i]);
        }
    }
    if (nuevoArray.length < 3) {
        return "No se encontraron los meses pedidos";
    } else {
        return nuevoArray;
    }
}

function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    const nuevoArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > 100) {
            nuevoArray.push(array[index]);
        }
    }

    return nuevoArray;
}

//metodo Auxiliar generador de valores entre 0  y 200
const generator = () => {
    var vec = [];
    for (let index = 0; index < 200; index++) {
        let aux = Math.random() * (0, 200);
        vec.push(Math.round(aux));
    }

    return vec;
};

function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:

    /* 
mi codigo viejo :


 let n = numero;
    let arr = [];
    let suma = 0;
    for (let index = 0; index < 10; index++) {
        arr.push(n);
        n = n + 2; //iucremento en 2
        for (let i = 0; i < arr.length; i++) {
            suma += arr[i];
        }
    }
   
    return arr;

*/

    let arr = [];
    let suma = numero;
    let index = 0;
    for (index; index < 10; index++) {
        suma = suma + 2;
        if (suma === index) {
            break;
        } else {
            arr.push(suma);
        }
    }
    if (index < 10) {
        return "Se interrumpió la ejecución";
    } else {
        return arr;
    }
}

function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:

    /* let arr = [];
                                                  let suma = numero;
                                                  let index = 0;
                                                  for (index; index < 10; index++) {
                                                      suma = suma + 2;

                                                      if (index === 5) {
                                                          arr.push(suma);
                                                          continue;
                                                      }
                                                  }

                                                  return arr; */

    var array = [];
    var suma = numero;
    for (var i = 0; i < 10; i++) {
        if (i === 5) continue;
        else {
            suma = suma + 2;
            array.push(suma);
        }
    }
    return array;
}

// No modificar nada debajo de esta línea
// --------------------------------