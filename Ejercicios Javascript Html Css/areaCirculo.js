const areaCirculo = function(radio) {
    //const radio = parseFloat(prompt("ingrese el valor del radio"));
    const rtdo = Math.PI * radio * radio;

    //console.log(`El area de un circulo es ${rtdo}`);
    console.log(rtdo);
    return rtdo;
};

//debemos inviocar a la funcion y pasarle un radio
areaCirculo(4);