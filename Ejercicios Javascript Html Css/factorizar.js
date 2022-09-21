function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:

    var resultado = [];
    // for (var i = 2; i < num + 1; i++) {
    for (var i = 2; i <= num; i++) {
        //resultado.push(1);
        console.log("probar factor: ", i); //primer recoorido 2

        //si esto no es correcto se sigue ejecutando e incrementando  i
        if (num % i === 0) {
            console.log(num, "%", i);
            //if(4%2) -->true
            console.log("agregar factor: ", i); //como 2 es factor y no me devuelve resto aplico

            resultado.push(i); //meto el resultado en un array por atras [2,x]
            console.log("pusheamos:", resultado);
            num /= i; //num=num/i;
            console.log("num", num);
            console.log("i vale:", i);
            // console.log("");
            i -= 1; //i=i-1

            console.log("ahora i vale:", i);
            console.log("");
            console.log("");
            console.log("");
        }
    }
    resultado.unshift(1);
    return resultado;
}