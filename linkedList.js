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
            const oldHead = this.headNode;
            this.headNode = new Node(value, new Node(oldHead.value, oldHead.next));
        }
    }
    append(value) {
        if (this.headNode === null) {
            this.headNode = new Node(value);
        } else {
            this.tail().next = new Node(value);
        }
    }
    head() {
        return this.headNode;
    }
    size() {
        let n = 0;
        let currentNode = this.headNode;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            n++;
        }
        return n;
    }
    tail() {
        if (this.headNode === null) {
            return null;
        }
        let currentNode = this.headNode;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    pop() {
        if (this.headNode === null ) {
            throw Error('cannot pop from empty list');
        } else {
            if (this.headNode === this.tail()) {
                this.headNode = null;
                return;
            }
            let currentNode = this.headNode;
            while (currentNode.next !== this.tail()) {
                currentNode = currentNode.next;
            }
            currentNode.next = null;
        }
    }
    at(index) {
        return Object.values(this)[index];
    }
    contains(value) {
        if (Object.values(this).some((node) => node.value === value)) {
            return true;
        } else {
            return false;
        }
    }
    find(value) {
        const foundValue = Object.values(this).find((node) => node.value === value)
        if (foundValue) { return foundValue }
        else { return null }
    }
}

const test = new LinkedList();
console.log(test)

test.prepend('test 1');
test.prepend('test 2');
test.prepend('test 3');

test.append('test 4');
test.append('test 5');
test.append('test 6');

console.log(test.pop())

console.log(test)

console.log(test.head())
console.log(test.tail())
console.log(test.size())

// console.log(test.head())
// console.log(test.size())
// console.log(test.tail())

// console.log(test.pop(), test)

// console.log(test.at(1))

// console.log(test.contains('test 1'))
// console.log(test.contains('test 10'))

// console.log(test.find('test 23'))