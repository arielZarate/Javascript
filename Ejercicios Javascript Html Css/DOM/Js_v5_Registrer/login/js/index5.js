/* Funciones js */

/* 

=====================
RECOIDAR
=========================
El id="email" es para el JS

   El name="email" es para el servidor


*/

const showPassword = () => {
  //console.log("Hi");
  const p1 = document.getElementById("password");
  const p2 = document.getElementById("password_repeat");

  p1.type = "text";
  console.log(p1.value);
  console.log(p2.value);
  //console.log(p2);
  // console.log(event);

  //p1 == p2 ? console.log(" son iguales ") : console.log("No son iguales");
};

//creo un objeto usuario para guardar
const usuario = {};
const register = () => {
  const email = document.getElementById("email").value;
  const user = document.getElementById("user").value;
  const password1 = document.getElementById("password").value;
  const password2 = document.getElementById("password_repeat").value;

  /* usuario.email = email;
  usuario.user = user;
  usuario.password1 = password1;
  usuario.password2 = password2; */

  // ESTO ES LO MISMO QUE LO DE ARRIBA SOLO QUE ES MAS FACIL
  /* Object.assign(usuario, {
    email: email,
    user: user,
    password1: password1,
    password2: password2,
  }); */

  //AHORA CUANDO LA VARIABLE COINCIDE CON EL VALOR NO ES NECESARIO PONER NAME:NAME , SOLO NAME
  Object.assign(usuario, {
    email,
    user,
    password1,
    password2,
  });

  //ahora estre objeto puedo enviarlo a mi BD , obviamente ya habiendo creado una y un modelo
  console.log(usuario);
};
