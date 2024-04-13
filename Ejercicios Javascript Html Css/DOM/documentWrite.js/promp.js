function PedirDatos() {
    let nombre = prompt("ingrese su nombre");
    let edad = prompt("ingrese su edad");
    let dni = prompt("ingrese su dni");

    let info = `su nombre es  + ${nombre} + su edad es  ${edad}  y su dni: ${dni}`;

    return info;
    // document.write(info);
}

//segubda forma de escribir una function , mas cercana a un callBack

const Imprimir = function() {
    const data = PedirDatos();
    // alert(data);
    //console.log(data)
    document.write(`${data}`);
};

Imprimir();