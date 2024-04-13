//AHORA CON FUNCIONES

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

let list = new LinkedList();

LinkedList.prototype.add = function(value) {
    let nodo = new Node(value);
    if (this.head === null) {
        this.head = nodo;
        return nodo; //retorno nodo
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = nodo;
        return node; //retorno nodo
    }
};

LinkedList.prototype.print = function() {
    let current = this.head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
};

LinkedList.prototype.removeLast = function() {
    if (this.head === null) {
        return null;
    } else if (this.head !== null && this.head.next === null) {
        let aux = this.head.value; //guarde el valor

        this.head = null; //lo setee a null

        return aux;
    } else {
        let current = this.head;
        while (current.next.next === null) {
            current = current.next;
        }
        let aux = current.next.value;
        current.next = null;
        return aux;
    }
};