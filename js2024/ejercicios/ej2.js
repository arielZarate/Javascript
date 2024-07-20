function stringMasLarga(array_string) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  // Tu código aca :

  let may = "";
  for (let i = 0; i < array_string.length; i++) {
    if (array_string[i].length > may.length);
    {
      may = array_string[i];
    }
  }

  //cuando inicia stringMasLarga vale 0
  let string_largo = array_string.reduce((stringMasLarga, string_actual) => {
    return string_actual.length > stringMasLarga.length
      ? string_actual
      : stringMasLarga;
  });

  console.log("String mas largo del array v1:", may);
  console.log("String mas largo del array v2:", string_largo);
}

// No modifiques nada debajo de esta linea //

module.exports = { stringMasLarga };
