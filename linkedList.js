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
        if (index > this.size()) {
            return null;
        }
        let currentNode = this.headNode;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    contains(value) {
        let currentNode = this.headNode;
        while (currentNode.value !== value && currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        if (currentNode.value === value) { return true }
        else { return false }
    }
    find(value) {
        let currentNode = this.headNode;
        let n = 0;
        while (currentNode.value !== value && currentNode.next !== null) {
            currentNode = currentNode.next;
            n++
        }
        if (currentNode.value === value) { return n }
        else { return null }
    }
    toString() {
        let string = ``;
        let currentNode = this.headNode;
        while (currentNode !== null) {
            string += `( ${currentNode.value} ) -> `
            currentNode = currentNode.next;
        }
        string += `null`
        return string;
    }
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size()) {
            this.append(value);
        } else {
            const replacedNode = this.at(index);
            const newNode = new Node(value, replacedNode);
            let currentNode = this.headNode;
            while (currentNode.next !== replacedNode) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    removeAt(index) {
        if (index === this.size()) {
            this.pop();
        } else {
            const removedNode = this.at(index);
            const nextNode = this.at(index + 1);
            if (index === 0) {
                this.headNode = nextNode;
            } else {
                let currentNode = this.headNode;
                while (currentNode.next !== removedNode) {
                    currentNode = currentNode.next;
                }
                currentNode.next = nextNode;
            }
        }
    }
}