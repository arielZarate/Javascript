//array de objectos
const array = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    edad: 38,
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    cotizacionCompany: 500.0,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    edad: 45,
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
    cotizacionCompany: 350.0,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    edad: 66,
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
    cotizacionCompany: 600.0,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    edad: 99,
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
    cotizacionCompany: 480.0,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    edad: 17,
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
    cotizacionCompany: 180.0,
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    edad: 8,
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
    cotizacionCompany: 250.0,
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    edad: 3,
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
    cotizacionCompany: 300.0,
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    edad: 21,
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
    cotizacionCompany: 780.0,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    edad: 52,
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
    cotizacionCompany: 1200.0,
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    edad: 19,
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
    cotizacionCompany: 70.0,
  },
];

/* 
==============================
fUNCIONES COMO DECLARARLAS
==============================
*/

//========== USA FUNCTION================
//1 FORMA DE DECLARAR: SIMPLE
function mensaje() {}
//2 SEGUNDA FORMA :EXPRESSION
const mensaje2 = function () {};

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

const ej_json = {
  // id ?:"",
  nombre: "ariel",
  apellido: "zarate",
  saludar: function () {
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

const alumnos = [
  {
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

/* llamar api con nativo js */
function callApi() {
  //

  //el return me sirve para poder ser usado en otras funciones
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

/* 1 funcion que me devulva la edad mayor  */

mayor1 = () => {
  maximo = 0;
  for (let i of array) {
    //if (this.maximo < i.edad) this.maximo = i.edad;
    if (i.edad > this.maximo) {
      this.maximo = i.edad;
    }
  }

  console.log(maximo);
  return maximo;
  //return maximo;
};

function mayor2() {
  const aux = [];
  for (const iterator of array) {
    //ahora guardo todos los precios en un array

    aux.push(iterator.cotizacionCompany);
  }

  //esto devuelve el precio mas alto de todos los del array
  console.log(Math.max(...aux));
  return Math.max(aux);
}

function menor() {
  const aux = [];
  for (const iterator of array) {
    //ahora guardo todos los precios en un array

    aux.push(iterator.cotizacionCompany);
  }

  //esto devuelve el precio mas alto de todos los del array
  console.log(Math.min(...aux));
  return Math.min(aux);
}

menor2 = () => {
  minimo = 99999999;
  for (let i of array) {
    //if (this.maximo < i.edad) this.maximo = i.edad;
    if (i.cotizacionCompany < this.minimo) {
      this.maximo = i.cotizacionCompany;
    }
  }

  console.log(minimo);
  return minimo;
  //return maximo;
};

/*
CALL  OF FUNCIONES
*/

//accedo al atributo de la clase json
//mostrarMascotas(ej_json.mascotas);
//callApi();
//mayorAge();
precioMasCaro(...array);
