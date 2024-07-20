const Animal = require("./Animal");

class Perro extends Animal {
  ladra = null;

  constructor(name, tipo, habitat, edad, peso, genero, color, raza, ladra) {
    super(name, tipo, habitat, edad, peso, genero, color, raza);
    this.ladra = ladra;
  }

  ladrar() {
    if (this.ladra === true) {
      console.log(`${this.name} está ladrando.`);
    } else if (this.ladra === false || this.ladra === null) {
      console.log(`${this.name} no está ladrando.`);
    }
  }

  toString() {
    return super.toString() + ` Ladrar: ${this.ladra}`;
  }
}

//llamo a la clase perro que herada de la clase ANIMAL

const perro = new Perro(
  "Buddy",
  "Perro",
  "Ciudad",
  3,
  25,
  "Macho",
  "Café",
  "Labrador",
  true
);

console.log(perro.toString());

console.log(perro.ladrar());

let timer = () =>
  setInterval(() => {
    console.log("Perro vivo 😀");
  }, 1000);

const interval = timer();
setTimeout(() => {
  clearInterval(interval);
  console.log("Perro aniquilado 👾");
}, 10000);
