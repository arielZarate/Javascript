class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}

const queue = new Queue();
console.log(queue.enqueue("The Rock")); // ['The Rock']
console.log(queue.enqueue("John Cena")); // ['The Rock', 'John Cena']
console.log(queue.enqueue("Stone Cold Steve Austin")); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']
console.log(queue.dequeue()); // 'The Rock'
console.log(queue.peek()); // 'John Cena'
console.log(queue.isEmpty()); // false
console.log(queue.print()); // ['John Cena', 'Stone Cold Steve Austin']

//opcion funcional

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita. 
Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
    this.cola = [];
}

//AHORA AGREGO LAS FUNCIONES PROTOTYPE GARANTIZA QUE EXISTE ESA FUNCION PARA TODAS CLASES QUE SE UTILIZEN DE TIPO QUEUE
//enqueue() : agrega un elemento a la cola

Queue.prototype.enqueue = function(elemento) {
    this.cola.push(elemento);
    return this.cola;
};

//dequeue() : elimina un elemento de la cola
Queue.prototype.dequeue = function() {
    //this.cola.isEmpty() ? "undefined" :
    return this.cola.shift();
};

Queue.prototype.size = function() {
    return this.cola.length;
};
Queue.prototype.isEmpty = function() {
    return this.cola.length === 0;
};