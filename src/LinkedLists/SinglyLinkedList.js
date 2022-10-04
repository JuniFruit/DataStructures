export class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    setNextNode(node) {
       
        this.next = node;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToHead(data) {
        const currentHead = this.head;
        const newHead = new Node(data, null);
        this.head = newHead;
        currentHead ? this.head.setNextNode(currentHead) : null;
        this.size++
    }

    addToTail(data) {
        if (!this.size) {

            return this.addToHead(data);
        }

        let current = this.head;
        while (current.next) {

            current = current.next;
        }
        current.setNextNode(new Node(data, null));
        this.size++;
       
    }

    insertAtIndex(index, data) {
        if (index === 0) return this.addToHead(data);
        if (index === this.size) return this.addToTail(data);
        if (index > this.size || index < 0) return;
        
        this.size++;
        let current = this.head;
        let prevNode = null;
        let count = 0
        
        while (current) {
            if (count === index) {              
                prevNode.setNextNode(new Node(data,current))          
              
                break;
            }
            count++;
            prevNode = current;
            current = current.next;
        }
    }

    removeHead() {
        const currentHead = this.head;
        if (!currentHead) return null;

        const newHead = currentHead.next;

        this.head = newHead;
        this.size--;
        return currentHead;

    }

    removeTail() {

        if (!this.size) return null;

        let tail = this.head;
        let prevNode;
        while (tail.next) {
            prevNode = tail;
            tail = tail.next;

        }

        if (tail === this.head) return this.removeHead();
        this.size--;
        prevNode.next = null;

        return tail;

    }

    removeByData(data) {
        if (!this.size) return null;
        if (this.head.value === data) return this.removeHead();

        let current = this.head.next;
        let prevNode = this.head;

        while (current) {
            if (current.value === data) {
                prevNode.next = current.next;
                break;
            }
            prevNode = prevNode.next
            current = current.next
        }
        if (current === null) return null;
        this.size--;
        return current;
    }

    search(data) {
        if (!this.size) return null;

        let current = this.head;

        while (current) {
            if (current.value === data) return current;
            current = current.next
        }
        return current;
    }

    searchByIndex(index) {
        if (index < 0 || index >= this.size) return null;
    
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) return current;
            current = current.next;
            count++;
        }
    }

    createList(size) {
        const list = new LinkedList();
        for (let i = 0; i < size; i++) {
            list.addToTail(i.toString())
        }

        return list
    }
}

/* Reversed list solution */


// export const reversedList = (list) => {

//     const reversed = new LinkedList();
//     const toReverse = (head) => {

//         if (head === null) return

//         toReverse(head.next);
//         reversed.addToTail(head.value);

//     }
//     toReverse(list.head);  
//     return reversed; 
// }

export const reversedList = (list) => {
    let next = null
    let current = list.head
    let prevNode = null;
  
    while (current) {
      prevNode = current.next;
      current.next = next;
      next = current;
      current = prevNode;
  
    }
    list.head = next;
    return list
}

/* Reversed list within indexes */

export const reverseBetween = (list, left, right) => {
    
    if (left === right) return list;
    if (left > right) throw new Error('Cannot perform reverse due to incorrect inputs');
    
    let reversedList;
    let current = list.head;
    let prevNode = null;
    let count = 1
    
    while (current) {
        if (count >= left && count < right) {
          let nextNodeAfterReverse;
          reversedList = current;
          let next = null
          let currentToSwitch = reversedList
          let prev = null;
          let secondCount = count;
          while (secondCount <= right) {
             prev = currentToSwitch.next;
             currentToSwitch.next = next;
             next = currentToSwitch;
             currentToSwitch = prev;
             if (secondCount + 1 === right) nextNodeAfterReverse = currentToSwitch.next;
             secondCount ++;
          }
    
          reversedList = next;
          prevNode ? prevNode.next = reversedList : list.head = reversedList;
          current.next = nextNodeAfterReverse;
          break;
        }
        count++;
        prevNode = current;
        current = current.next;
    }
    return list;
};

/* Middle node solution */  

export const getMiddle = (list) => {

    let fastRunner = list.head;
    let slowRunner = list.head;

    while (fastRunner) {
        fastRunner = fastRunner.next
        if (fastRunner) {
            fastRunner = fastRunner.next;
            slowRunner = slowRunner.next;
        }
        
    }
    return slowRunner;
}

/* Swap nodes in linked list */

export const swapNodes = (list, valueOne, valueTwo) => {

    if (valueOne === valueTwo) throw new Error('Elements are the same');
    if (!list.head || !list.head.next) throw new Error('List is either empty or consists of one element only')

    let current = list.head;
    let prevNode = null;
    const oldHead = list.head;
    const newNodeOne = new Node(valueOne);
    const newNodeTwo = new Node(valueTwo);
    let temp1;
    let temp2;

    while (current) {

        if (current.value === valueOne) {
            newNodeTwo.next = current.next;            
            current = newNodeTwo;
            prevNode ? prevNode.next = current : null;          
            temp1 = current;
           
        } else if (current.value === valueTwo) {
            newNodeOne.next = current.next;
            current = newNodeOne;
            prevNode ? prevNode.next = current : null;            
            temp2 = current;
        }
        // Break if elements are swapped;
        if (newNodeOne.next && newNodeTwo.next) break;

        prevNode = current;
        current = current.next
    }

    if (newNodeOne.value === oldHead.value) list.head = newNodeTwo;
    if (newNodeTwo.value === oldHead.value) list.head = newNodeOne;
    if (!temp1 || !temp2) throw new Error('Element(s) not in the list');;
    return list;
}

