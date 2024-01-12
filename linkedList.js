class Node {
    constructor (value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head) {
        this.head = new Node(head);
    }
}

console.log(new Node('test'))
console.log(new LinkedList())
// {head: Node('hahaha', 1), 1: Node('hihihi', 2), 2: Node('hohoho', 3), tail: Node('huhuhu', null)}