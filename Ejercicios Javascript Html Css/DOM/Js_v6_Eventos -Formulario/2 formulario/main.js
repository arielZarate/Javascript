/* de esta forma desacoplamos el js del html */

//YA ACCEDIENDO AL DOM TODO ES MAGIA Y POSIBLE
const form = document.querySelector("#form1");
//console.log(form);

objForm = {};

const enviarFormulario = (ev) => {
    ev.preventDefault();

    //destructuring
    const { name, lname, email, phone, message } = ev.target;

    objForm = {
        nombre: name.value,
        apellido: lname.value,
        correo: email.value,
        telefono: phone.value,
        comentario: message.value,
    };

    //mostrando los target
    console.log(
        ev.target.name,
        ev.target.lname,
        ev.target.email,
        ev.target.phone,
        ev.target.message
    );

    //aca muestro port consola el obj con todo los datos
    //podria enmviarse todo a un servidor/api o lo que yo quiera
    //puedo tambien validar todo accediendo o comparando usando los tag

    console.log(objForm);
};

form.addEventListener("submit", enviarFormulario);