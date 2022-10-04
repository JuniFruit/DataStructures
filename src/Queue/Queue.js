import { LinkedList } from "../LinkedLists/SinglyLinkedList.js";

export class Queue  {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;

    }

    enqueue(data) {
        if (this.size >= this.maxSize) return 'Reached max size of the Queue';

        this.queue.addToTail(data);
        this.size ++;

    }
    dequeue() {
        if (!this.size) return null;

        const removed = this.queue.removeHead();
        this.size --;
        return removed;
    }

    peek() {
        if (!this.size) return null;

        return this.queue.head;
    }
}