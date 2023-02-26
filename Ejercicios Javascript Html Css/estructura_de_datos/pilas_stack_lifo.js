/* 

Dentro de los Stack se cumple el principio Last in - First Out (LIFO). 
Esto significa que el último en entrar a la pila es el primero en salir. 
Pensemos, por ejemplo, en el mesero de un restaurante. En la cocina recogerá 
los platos que pondrá en la mesa. Los apila uno arriba del otro para poder 
llevarlos a todos juntos. Pero cuando tiene que servir los platos en la mesa, 
el plato que está más arriba de su pila (el último en agregar) será el primero que servirá.
Los **stacks** tienen ***dos operaciones***: push( ) y pop( ). 
Esto es porque sólo se puede poner y sacar elementos en un orden definido. 
Si bien los *Stacks* no son estructuras nativas de JavaScript, 
existen múltiples formas de implementarlas. Por ejemplo, con arreglos, clases 
o listas enlazadas.
===pila===

ult_elem  last in fisrt out
____
____
____
____

*/

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

const stack = new Stack();
console.log(stack.size()); // 0
console.log(stack.push("John Cena")); // ['John Cena']
console.log(stack.push("The Rock")); // ['John Cena', 'The Rock']
console.log(stack.size()); // 2
stack.print(); // ['John Cena', 'The Rock]
console.log(stack.peek()); // 'The Rock'
console.log(stack.pop()); // 'The Rock'
console.log(stack.peek()); // John Cena