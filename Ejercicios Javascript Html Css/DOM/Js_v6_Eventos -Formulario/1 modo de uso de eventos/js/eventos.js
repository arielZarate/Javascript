/* Funciones js */

/* 

=====================
RECOIDAR
=========================
El id="email" es para el JS

   El name="email" es para el servidor


*/

const llamadaBoton1 = () => {
    console.log("se la llamado al boton");
};

function llamada2() {
    console.log("evento onclick");
    alert("ha posado por encima del titulo");
}

const titulo2 = document.getElementById("event2");

// FORMA1  DE LLAMAR AL EVENTO
//titulo2.onclick = llamada2;

//forma 2 de llamar al evento con addEventListener y usando la llamada
titulo2.addEventListener("click", llamada2);

//FORMA 3 DE LLAMAR AL EVENTO CON UNA FUNCION ANONIMA
titulo3 = document
    .getElementById("event3")
    .addEventListener("mousemove", () => {
        console.log("se ha llamado al 3 evento");
    });

const entrada = (ev) => {
    console.log(ev);
};