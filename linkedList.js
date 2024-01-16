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
    pop() {
        if (this.headNode === null ) {
            return error('Error: cannot pop from an empty list');
        } else {
            const poppedValue = this.tail().value;
            delete this[poppedValue]
            Object.values(this).find((node) => node.next === poppedValue).next = null;
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

console.log(test.pop(), test)

console.log(test.at(1))

console.log(test.contains('test 1'))
console.log(test.contains('test 10'))

console.log(test.find('test 23'))