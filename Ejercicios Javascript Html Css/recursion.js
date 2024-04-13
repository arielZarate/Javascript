/* 

- **RECURSIÓN**
    - **¿Qué es?**
        
        La **recursión** es una metodología que nos sirve para realizar una misma acción
         muchas veces. Más específicamente, para dividir un problema grande en muchos
          problemas pequeños, e iterar sobre cada uno de ellos de manera más sencilla.
        
        Cuando hablamos de recursión hay que pensar en ***una función que se llama a sí 
        misma.*** Es decir, que repetirá su propio comportamiento una y otra vez. 
        Veamos un ejemplo:
*/

/* function sumar(num) {
    var total = num + 2;
    return sumar(total);
} */

function sumar(num) {
    if (num >= 10) return num; //condicion de corte  si num es mayor a 10 retorna el numero

    var total = num + 2;
    /*  
    primer elemento es 3 y le suma 2 =5 retorna la misma funcion y ahora le pasa 5
    luego ingresa el 5 y el suma 2 nuevamente y es 7 , invioma suma(7)
 y asi hasta que el numero que ingresa es 11 y como 11 es mayor a 10 corta     
    */
    return sumar(total);
}
console.log(sumar(3));

/*  */