import { getMiddle, LinkedList, reverseBetween, reversedList, swapNodes } from '../LinkedLists/SinglyLinkedList.js';
import { Queue } from '../Queue/Queue.js';
import { Stack } from '../Stack/Stack.js';
import { HashMap } from '../HashMap/HashMap.js';
import { createOperations } from './createOperations.js';
import { handleError, highlightNode, removeAllChildNodes } from './utility.js';
import { setPointers } from './utility.js';
import { MinHeap } from '../Heap/MinHeap.js';

const createBtn = document.getElementById('create-button');
const canvas = document.getElementById('canvas');


/* Linked list */

let LINKED_LIST;

const createVisualLinkedList = (list) => {

    if (canvas.children.length) {
        removeAllChildNodes(canvas);
    }

    let current = list.head;

    while (current) {
        canvas.append(createVisualNode(current.value))
        const pointer = document.createElement('div')
        pointer.append('--->');
        pointer.className = 'pointer'
        canvas.append(pointer);
        current = current.next;
    }


    canvas.lastChild.remove();

}



export const linkedListOperations = () => {

    const inputInd = Number(document.getElementById('input-index') ? document.getElementById('input-index').value : null);
    const inputData = document.getElementById('input-data') ? document.getElementById('input-data').value : null;
    const inputInd2 = Number(document.getElementById('input-index2') ? document.getElementById('input-index2').value : null);
    const inputData2 = document.getElementById('input-data2') ? document.getElementById('input-data2').value : null
    const operation = document.getElementById('functions').value;



    switch (operation) {
        case 'LL_reverseList':
            createVisualLinkedList(reversedList(LINKED_LIST));
            break;
        case 'LL_insertAtIndex':
            LINKED_LIST.insertAtIndex(inputInd, inputData)
            createVisualLinkedList(LINKED_LIST);
            break;
        case 'LL_removeHead':
            LINKED_LIST.removeHead();
            createVisualLinkedList(LINKED_LIST);
            break;
        case 'LL_removeTail':
            LINKED_LIST.removeTail()
            createVisualLinkedList(LINKED_LIST);
            break;
        case 'LL_addToHead':
            LINKED_LIST.addToHead(inputData)
            createVisualLinkedList(LINKED_LIST);
            break;
        case 'LL_addToTail':
            LINKED_LIST.addToTail(inputData)
            createVisualLinkedList(LINKED_LIST);
            break;
        case 'LL_search':
            const targetSearch = LINKED_LIST.search(inputData)
            createVisualLinkedList(LINKED_LIST);
            highlightNode(targetSearch);
            break;
        case 'LL_searchByIndex':
            const targetSeachData = LINKED_LIST.searchByIndex(inputInd)
            createVisualLinkedList(LINKED_LIST);
            highlightNode(targetSeachData);

            break;
        case 'LL_removeByData':
            LINKED_LIST.removeByData(inputData)
            createVisualLinkedList(LINKED_LIST);
            break;
        case 'LL_getMiddle':
            const middle = getMiddle(LINKED_LIST)
            createVisualLinkedList(LINKED_LIST);
            highlightNode(middle);
            break;
        case 'LL_reverseBetween':
            try {
                const reversed = reverseBetween(LINKED_LIST, inputInd, inputInd2)
                createVisualLinkedList(reversed);
            } catch (e) {
                handleError(e.message)
            }

            break;
        case 'LL_swapNodes':
            try {
                const swapped = swapNodes(LINKED_LIST, inputData, inputData2)
                createVisualLinkedList(swapped);

            } catch (e) {
                handleError(e.message)
            }

            break;

        default:

            return;
    }
}

/* Queue */

let QUEUE;

export const queueOperations = () => {
    const inputData = document.getElementById('input-data') ? document.getElementById('input-data').value : null;
    const operation = document.getElementById('functions').value;

    switch (operation) {
        case 'Q_dequeue':
            QUEUE.dequeue();
            createVisualLinkedList(QUEUE.queue);
            break;
        case 'Q_enqueue':
            const msg = QUEUE.enqueue(inputData)
            createVisualLinkedList(QUEUE.queue);
            handleError(msg)
            break;
        case 'Q_peek':
            const peeked = QUEUE.peek();
            createVisualLinkedList(QUEUE.queue);
            highlightNode(peeked)

            break;

    }
}

/* Stack */

let STACK;

const createVisualStack = (stack) => {
    if (canvas.children.length) {
        removeAllChildNodes(canvas);
    }

    let current = stack.head;

    while (current) {
        canvas.append(createVisualNode(current.value, 'stack'))

        current = current.next;
    }
}

export const stackOperations = () => {
    const inputData = document.getElementById('input-data') ? document.getElementById('input-data').value : null;
    const operation = document.getElementById('functions').value;


    switch (operation) {
        case 'S_pop':
            STACK.pop();
            createVisualStack(STACK.stack);
            break;
        case 'S_push':
            const msg = STACK.push(inputData);
            createVisualStack(STACK.stack);
            handleError(msg)
            break;
        case 'S_peek':
            const peeked = STACK.peek();
            createVisualStack(STACK);
            highlightNode(peeked)

            break;

    }
}

/* HashMap */

let HASHMAP;

const createVisualHashMap = (map) => {
    if (canvas.children.length) {
        removeAllChildNodes(canvas);
    }


    const buckets = map.map((bucket, index) => {
        const bucketContainer = document.createElement('div');
        bucketContainer.className = 'bucket-container'
        bucketContainer.id = 'bucket-container';
        const bucketNode = document.createElement('div');
        bucketNode.className = 'bucket';
        bucketNode.id = 'bucket';
        const dataP = document.createElement('p');
        dataP.append(index);
        bucketNode.append(dataP);
        bucketContainer.append(bucketNode);

        const linkedListContainer = document.createElement('div')
        linkedListContainer.className = 'linkedList-container';
        linkedListContainer.id = 'linkedList-container'


        let current = bucket.head;

        while (current) {
            linkedListContainer.append(createVisualNode(`key: ${current.value.key} value: ${current.value.value}`))
            const pointer = document.createElement('div')
            pointer.append('--->');
            pointer.className = 'pointer'
            linkedListContainer.append(pointer);
            current = current.next;
        }
        bucketContainer.append(linkedListContainer);
        return bucketContainer;

    })

    const hashMapContainer = document.createElement('div')
    hashMapContainer.className = 'hashmap-container';

    buckets.forEach(bucket => hashMapContainer.append(bucket));

    canvas.append(hashMapContainer)

}

export const hashMapOperations = () => {
    const inputData = document.getElementById('input-data') ? document.getElementById('input-data').value : null;
    const inputData2 = document.getElementById('input-data2') ? document.getElementById('input-data2').value : null;
    const operation = document.getElementById('functions').value;
    const opeartionsDiv = document.getElementById('operations');



    switch (operation) {
        case 'HM_assign':
            HASHMAP.assign(inputData, inputData2);
            createVisualHashMap(HASHMAP.hashmap);
            break;
        case 'HM_retrieve':
            const retrieved = HASHMAP.retrieve(inputData);
            const result = document.createElement('p')
            result.className = 'operation-result'
            result.append(`Function retrieve() with the key ${inputData} returned ${retrieved}`);
            opeartionsDiv.prepend(result);

            break;

    }
}

/* Heap */

let HEAP;

const createVisualHeap = (heap) => {
    if (canvas.children.length) {
        removeAllChildNodes(canvas);
    }
    

    const constructVisualTree = (heap, prevContainer, i = 1) => {
        if (!heap[i]) return
        const treeNodeContainer = document.createElement('div');
        treeNodeContainer.className = 'treeNode-container';
        treeNodeContainer.id = 'treeNode-container';
        treeNodeContainer.append(createVisualNode(heap[i]));
        const treePointerLeft = document.createElement('p');
        treePointerLeft.className = 'treePointerLeft pointer';
        treePointerLeft.append('>')
        const treePointerRight = document.createElement('p');
        treePointerRight.append('>')
        treePointerRight.className = 'treePointerRight pointer';
        treeNodeContainer.append(treePointerLeft);
        treeNodeContainer.append(treePointerRight);
        prevContainer.append(treeNodeContainer);
        let leftChild = i * 2;
        let rightChild = i * 2 + 1

        constructVisualTree(heap, treeNodeContainer, leftChild);
        constructVisualTree(heap, treeNodeContainer, rightChild);
    }

    constructVisualTree(heap, canvas);

}

const createHeap = (size) => {
    const heap = new MinHeap();
    let counter = 0;
    while (counter < size) {
        heap.addValue(Math.floor(Math.random() * 100));
        counter ++;
    }
   
    return heap
}   

export const heapOperations = () => {
    const inputInd = Number(document.getElementById('input-index') ? document.getElementById('input-index').value : null);
    const operation = document.getElementById('functions').value;
    const opeartionsDiv = document.getElementById('operations');


    switch (operation) {
        case 'MH_popMin':
            const popped = HEAP.popMin();
            const result = document.createElement('p')
            result.className = 'operation-result'
            result.append(`Function popMin() returned ${popped}`);
            opeartionsDiv.prepend(result);
            createVisualHeap(HEAP.heap);
            break;
        case 'MH_addValue':
            HEAP.addValue(inputInd);
            createVisualHeap(HEAP.heap);

            break;

    }
}

/* Helper and create handling */

const createVisualNode = (data, name = 'node') => {
    const div = document.createElement('div')
    const p = document.createElement('p');
    p.append(data);
    div.append(p);
    div.className = name;

    return div;
}

const handleCreate = () => {

    const typeStructures = document.getElementById('structures').value;
    const size = document.getElementById('input-size').value;
    if (size > 10 || size < 0) return handleError('Size cannot be more than 10 or less than 0');

    switch (typeStructures) {
        case 'Linked List':
            LINKED_LIST = new LinkedList().createList(size)
            createVisualLinkedList(LINKED_LIST)
            createOperations(typeStructures);
            setPointers(typeStructures);
            canvas.style.flexDirection = 'row'
            break;
        case 'Queue':
            QUEUE = new Queue(size);
            QUEUE.queue = new LinkedList().createList(size);
            QUEUE.size = size;
            createVisualLinkedList(QUEUE.queue);
            createOperations(typeStructures);
            setPointers(typeStructures);

            canvas.style.flexDirection = 'row'
            break;
        case 'Stack':
            STACK = new Stack(size);
            STACK.stack = new LinkedList().createList(size);
            STACK.size = size;
            createVisualStack(STACK.stack)
            createOperations(typeStructures);
            canvas.style.flexDirection = 'column'
            break;
        case 'HashMap':
            HASHMAP = new HashMap(Number(size));
            console.log(HASHMAP)
            createVisualHashMap(HASHMAP.hashmap);
            createOperations(typeStructures)
            canvas.style.flexDirection = 'column'

            break;
        case 'Heap':          
            HEAP = createHeap(size)
            createVisualHeap(HEAP.heap);
            createOperations(typeStructures);
            break;
        default:
            return
    }


}



createBtn.addEventListener('click', handleCreate)