function counter() {
    /*
     Ejercicio 1

La función counter debe retornar otra función.
 Esta función retornada debe actuar como un contador, 
 retornando un valor numérico que empieza en 1 e incrementa con cada invocación.
                                       
                                      Ejemplo:
                                      const nuevoContador = counter()
                                      nuevoContador()     // 1
                                      nuevoContador()     // 2
                                      nuevoContador()     // 3

                                      const otroContador = counter()
                                      otroContador()      // 1
                                      otroContador()      // 2
                                      otroContador()      // 3
    
    //esta variable funciona como un clousure o memoria cache                                  */
    let cont = 0;

    //esta es la funcion interna que retorna una funcion que incrementa el contador
    const incrementa = function() {
        cont++;
        return cont;
    };

    return incrementa;
}
const nuevoContador = counter();

//ahoar ejecuto
console.log(nuevoContador());
console.log(nuevoContador());
console.log(nuevoContador());