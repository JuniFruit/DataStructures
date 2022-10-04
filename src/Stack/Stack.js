import { LinkedList } from "../LinkedLists/SinglyLinkedList.js";


export class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0
    }

    push(value) {
        if (this.maxSize <= this.size) return 'Reached max size of the Stack';

        this.stack.addToHead(value);
        this.size++;
    }
    pop() {
        if (!this.size) return null;
        const popped = this.stack.removeHead();
        this.size--;
        return popped
    }
    peek() {
        if (!this.size) return null;

        const head = this.stack.head;
        return head;
    }
}