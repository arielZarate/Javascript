// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
    // un par clave-valor en forma de matriz.
    //Ejemplo:
    /*objeto({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                D: 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                B: 2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                C: 3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    //usando el JSon.stringify();=======================

    let array = [];

    for (const key in objeto) {
        array.push([key, objeto[key]]);
    }

    return array;
}

function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    //Escribe tu código aquí
    //var cadena = "asdsfghhass1212134545sffffii";
    /* var arr = Array.from(string).sort();

            var repetidos = [];
            var unicos = [];
            let contador = 1;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i + 1] === arr[i]) {
                //console.log("se repite el " + ord1[i]);
                contador++;
              } else {
                unicos.push(arr[i]);
                repetidos.push(contador);
                contador = 1;
              }
            }
            //console.log(unicos);
            //console.log(repetidos);

            var salida = "";

            for (let j = 0; j < unicos.length; j++) {
              salida += `${unicos[j]}: ${repetidos[j]}\n`;
            }

            console.log(salida); */

    let obj = {};

    for (let i = 0; i < string.length; i++) {
        if (!obj[string[i]]) {
            //obj{a : 0 }
            obj[string[i]] = 0;
        }
        obj[string[i]] += 1;
        ///obj{a : 5 }
    }
    return obj;
}

function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí

    var mayusculas = "";
    var minusculas = "";

    for (let index = 0; index < s.length; index++) {
        //console.log(s[index]);
        if (s[index] === s[index].toUpperCase()) {
            mayusculas += s[index];
        } else {
            minusculas += s[index].toLowerCase();
        }
    }

    return mayusculas + minusculas;
}

function asAmirror(str) {
    //La función recibe una frase.
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" ||. Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí

    // var separarCadena = str.split(""); // var separarCadena = "hola".split("");
    // ["h", "o", "l", "a"]

    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    //var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]

    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    //var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"

    let array = Array.from(str);
    let invertido = array.reverse("");
    let arrUnido = invertido.join("");

    let salida = arrUnido.split(" ").reverse("").join(" ");

    return salida;
}

function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí

    var string = numero.toString();

    if (string.split("").reverse().join("") === string) {
        return "Es capicua";
    } else {
        return "No es capicua";
    }
    /* if (numeroString[0] == numeroString[2]) {
  return "Es capicua";
  } else {
        return "No es capicua";
} */
}

function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí

    // const letras = ["a", "b", "c"];

    var newCadena = cadena.replace(/[a-c]{1}/g, "");

    return newCadena;
}

function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí

    //var arr = [ 40, 1, 5, 200 ];
    function comparar(a, b) {
        return a.length - b.length;
    }
    return arr.sort(comparar); // [ 1, 5, 40, 200 ]
}

function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí

    var first = Array.from(arreglo1);
    var second = Array.from(arreglo2);
    var comun = [];
    var comun = first.filter((x) => second.indexOf(x) !== -1);
    // console.log("The common elements are: " + common);
    if (comun.length <= 0) {
        return comun;
    }

    return comun;
}

// No modificar nada debajo de esta línea
// --------------------------------