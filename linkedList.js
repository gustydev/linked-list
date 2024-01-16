class Node {
    constructor (value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }
    prepend(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            this[this.headNode.value] = new Node(this.headNode.value, this.headNode.next);
            this.headNode = new Node(value, this.headNode.value);
        }
    }
    append(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            this.tail().next = value;
            this[value] = new Node(value);
        }
    }
    head() {
        return this.headNode;
    }
    size() {
        return Object.keys(this).length;
    }
    tail() {
        return Object.values(this).find((node) => node.next === null);
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

test.append('test 4')
console.log(test)

test.append('test 5');
console.log(test)

test.append('test 6');
console.log(test)

console.log(test.head())
console.log(test.size())
console.log(test.tail())