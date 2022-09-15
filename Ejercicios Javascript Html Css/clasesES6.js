class Persona {
    constructor(nombre, apellido) {
        (this.nombre = nombre), (this.apellido = apellido);
    }

    saludar() {
        console.log("Hola!" + this.nombre);
    }
}

//var toni = new Persona("Toni", "Tralice");
//toni.saludar();

//ahora aplicamos herencia
class Empleado extends Persona {
    constructor(nombre, apellido, empleo, sueldo) {
        super(nombre, apellido);
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
}

var toni = new Empleado("Toni", "Tralice", "Profesor", 100);
toni.saludar();