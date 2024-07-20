function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.
  // Tu código acá :

  let array_retorno = array.map((obj) => {
    //como no se el nombre de la propiedad puedo buscar por el parametro propiedad y matchear

    return obj[propiedad];
  });

  return array_retorno;
}

// No modifiques nada debajo de esta linea //

module.exports = { pluck };
