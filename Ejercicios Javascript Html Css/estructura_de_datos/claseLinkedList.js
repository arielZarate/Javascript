/*
    CLASE NODE
    Clase que representa un nodo, esta tendrá dos propiedades, la propiedad valueque representará 
    el dato de interés que se almacenará, y la propiedad next representará un puntero al siguiente 
    elemento de la lista.
    */

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

/* 
Clase que representa una lista enlazada, esta clase tendrá la propiedad head que representará 
el nodo inicial. Al comenzar, la cabecera se establecerá con el valor null,ya que este no tendrá
 ningún nodo asociado al principio.
*/
class LinkedList {
    constructor() {
        this.head = null;
    }

    /* 
                                        Método de inserción de nodos
                                        Empezaremos por un método básico de inserción de nodos a nuestra lista enlazada.

                                        insertNode()
                                        */

    agregar(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // print()
    /* 

Recorremos la lista elemento por elemento imprimiendo la propiedad value */

    mostrar() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    /* 
  Método de búsqueda de nodos
Continuaremos con un método básico de búsqueda de elementos basándonos en su valor. 
En esta ocasión retornaremos la primera coincidencia.
*/
    buscar(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    /* Método de eliminación de nodos
              Continuaremos con un método básico de eliminación de elementos basándonos en su valor. */

    eliminar(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
        }
    }
} //llave fin de clase

const linkedList = new LinkedList();
linkedList.insertNode(12);
linkedList.insertNode(99);
linkedList.insertNode(37);
linkedList.print();
console.log(linkedList.findNode(37));

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

//function LinkedList() {}

//function Node(value) {}