const convertir_a_array = function(n) {
    let arr = Array.from(n);

    console.log("con el metodo Array.from(): ", arr);

    let sp = n.split("");

    console.log("con el split(): " + sp);

    console.log("uniendo los caracteres de vuelta: ", sp.join(""));

    console.log("*********Recorriendo un array de caracteres*^**********");
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }

    console.log("mostrando la cadena resultante del for: ", str);
};

convertir_a_array("Hola");