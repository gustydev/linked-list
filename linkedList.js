class Node {
    constructor (value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            this[this.head.value] = new Node(this.head.value, this.head.next);
            this.head = new Node(value, this.head.value);
        }
    }
}

const test = new LinkedList();
console.log(test)
test.prepend('test 1')
console.log(test)
test.prepend('test 2')
console.log(test)
test.prepend('test 3')
console.log(test)
// {head: Node('hahaha', 1), 1: Node('hihihi', 2), 2: Node('hohoho', 3), tail: Node('huhuhu', null)}