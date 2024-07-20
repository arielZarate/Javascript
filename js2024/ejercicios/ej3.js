function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  // Tu código aca :
  ///

  let nombre_ret = "";
  /* for (var amigo of amigos) {
    if (amigo.nombre === nombre) {
      nombre_ret = nombre;
    }
  } */

  nombre_ret = amigos.find((amigo) => {
    return amigo.nombre === nombre;
  });

  if (nombre_ret) {
    console.log("Amigo encontrado:", nombre_ret);
  } else {
    console.log("Amigo no encontrado ");
  }
}

module.exports = { buscarAmigo };
