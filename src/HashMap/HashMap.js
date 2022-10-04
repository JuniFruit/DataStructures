import { Node } from "../LinkedLists/SinglyLinkedList.js";
import { LinkedList } from "../LinkedLists/SinglyLinkedList.js";

export class HashMap {
    constructor(size = 0) {
        this.hashmap = Array(size).fill(null).map(() => new LinkedList())
        this.size = size;
    }

    hash(key) {
        let hashCode = 0;
        for (let i=0;i<key.length;i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }

    assign(key, value) {

        const arrIndex = this.hash(key);
        const linkedList = this.hashmap[arrIndex];

        if (!linkedList.head) {
            return linkedList.addToHead({key, value})
        }

        let current  = linkedList.head;

        while (current) {
            if (current.value.key === key) {
                current.value.value = value;
                break;
            }
            if (!current.next) {
                current.next = new Node({key, value});
                break;
            }
            current = current.next;
        }

    }
    retrieve(key) {
        const arrIndex = this.hash(key);
        const linkedList = this.hashmap[arrIndex];

        if (!linkedList.head) return null;

        let current = linkedList.head;        

        while (current) {
            if (current.value.key === key) {
                return current.value.value;               
            }
            current = current.next;
        }
        return null;
    }
}

