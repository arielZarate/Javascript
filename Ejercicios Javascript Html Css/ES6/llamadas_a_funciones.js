/*
===
=== === === === === === === === ===
fUNCIONES COMO DECLARARLAS
    ===
    === === === === === === === === ===
    *
    /

//========== USA FUNCTION================
//1 FORMA DE DECLARAR: SIMPLE
function mensaje() {}
//2 SEGUNDA FORMA :EXPRESSION
const mensaje2 = function() {};

//==========NO USA FUNCTION================
//3 FORMA declaracion:$ ARRROW FUNCTION
mensaje3 = () => {};

const anonima =
    //una funcion recibe por parametro otra funcion, se llama callback
    //uncion anonima: no tiene nombre
    //arrowFunction
    () => {
        alert(`Hola me llamo ariel zarate`);
    };

/* 




==============================
JSON :JAVASCRIPT NOTACION OBJECT
==============================
*/

//clave (key ):valor(value)
//no tiene limites

//========formato de escritura=======
/* 

nombre=[//contiene varios]

uno={
{
  nombre(key):juan(value)
}
}
uno:_solo
 */

const data_aux = {
    // id ?:"",
    nombre: "ariel",
    apellido: "zarate",
    saludar: function() {
        alert(`Hola me llamo ${this.nombre}  ${this.apellido}`);
    },
    edad: "35",
    estado_civil: "soltero",
    colores: ["tomato", "blue"],
    mascotas: [
        { nombre: "firulai", tipo: "🐶🐕", vivo: true },
        { nombre: "manolo", edad: 5, tipo: "🐢", vivo: false },
        { nombre: "lucas", edad: 2, tipo: "🦆", vivo: true },
        { nombre: "micaela", tipo: "🕷", vivo: true },
    ],
};

const alumnos = [{
        nombre: "juan",
        apellido: "chonlee",
        apodo: "juanchi",
        musica: [{ grupo: "elvis presley" }, { grupo: "avril lavigne" }],
    },
    {
        nombre: "maria",
        apellido: "sanchez",
        apodo: "maru",
        musica: [{ grupo: "la mona" }, { grupo: "lbc" }],
    },
];

/* 
for (let mascota of mascotas) {
  console.log(mascota);
  document.write(mascota);
}
 */
mostrarMascotas = (mascotas) => {
    /* 
                                                                                =================================
                                                                                    for of
                                                                                =================================
                                                                                */

    //console.log(mascotas);
    for (const mascota of mascotas) {
        //mascota.vivo == true ? console.log(mascota) : null;
        console.log(mascota);
    }
};

/*
CALL  OF FUNCIONES
*/

//accedo al atributo
mostrarMascotas(data_aux["mascotas"]);