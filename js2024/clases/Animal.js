class Animal {
  name = "";
  tipo = "";
  habitat = "";
  edad = 0;
  peso = 0;
  genero = "";
  color = "";
  raza = "";

  constructor(
    name = "",
    tipo = "",
    habitat = "",
    edad = 0,
    peso = 0,
    genero = "",
    color = "",
    raza = ""
  ) {
    this.name = name;
    this.tipo = tipo;
    this.habitat = habitat;
    this.edad = edad;
    this.peso = peso;
    this.genero = genero;
    this.color = color;
    this.raza = raza;
  }

  /*  
  constructor(name, tipo, habitat, edad, peso, genero, color, raza) {
    this.name = name;
    this.tipo = tipo;
    this.habitat = habitat;
    this.edad = edad;
    this.peso = peso;
    this.color = color;
    this.genero = genero;
    this.raza = raza;
  }

    
    constructor() {
        this.name = "";
        this.tipo = "";
        this.habitat = "";
        this.edad = 0;
        this.peso = 0;
        this.genero = "";
        this.color = "";
        this.raza = "";
    }
    

   */
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getTipo() {
    return this.tipo;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  getHabitat() {
    return this.habitat;
  }
  setHabitat(habitat) {
    this.habitat = habitat;
  }

  getEdad() {
    return this.edad;
  }

  setEdad(edad) {
    this.edad = edad;
  }

  getPeso() {
    return this.peso;
  }
  setPeso(peso) {
    this.peso = peso;
  }

  getGenero() {
    return this.genero;
  }

  setGenero(genero) {
    this.genero = genero;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getRaza() {
    return this.raza;
  }
  setRaza(raza) {
    this.raza = raza;
  }
  toString() {
    return `Nombre: ${this.name}, Tipo: ${this.tipo}, Habitat: ${this.habitat}, Edad: ${this.edad}, Peso: ${this.peso}, Genero: ${this.genero}, Color: ${this.color}, Raza: ${this.raza}`;
  }
}

module.exports = Animal;
