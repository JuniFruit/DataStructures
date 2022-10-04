import { LinkedList } from "./SinglyLinkedList";
import { reversedList } from './SinglyLinkedList';
import { getMiddle } from './SinglyLinkedList';
import { swapNodes } from './SinglyLinkedList';
import { reverseBetween } from "./SinglyLinkedList";
/* Helper */

const toArray= (list) => {
    const arr = [];
    let current = list.head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr
}

const compareArr = (arr, arr2) => {
    return arr.join(',') === arr2.join(',');
}

describe('#addToHead', () => {
    test('Should add node to the head of the list', () => {
        const list = new LinkedList();
        list.addToHead(10);
        const oldHead = list.head.value;
        list.addToHead(5);
        expect(list.head.value).toBe(5);
        expect(list.head.next.value).toBe(oldHead);

    })
})

describe('#addToTail', () => {
    describe('node is added to an empty list', () => {
        test('it adds to a head', () => {
            const list = new LinkedList();
            list.addToTail(5);
            expect(list.head.value).toBe(5);
        })
    })
    describe('node is added to a populated list', () => {
        test('it adds to the tail', () => {
            const ll = new LinkedList()
            const list = ll.createList(10);
            list.addToTail(5);
            let tail = list.head;
            while (tail.next) {
                tail = tail.next
            }
            expect(tail.value).toBe(5);
        })
    })
})

describe('#searchByIndex', () => {
    describe('index is negative', () => {
        test('it returns null', () => {
            const ll = new LinkedList();
            const list = ll.createList(10);
            const target = list.searchByIndex(-2);

            expect(target).toBeNull();
        })
    })
    describe('index is greater than the list size', () => {
        test('it returns null', () => {
            const ll = new LinkedList();
            const list = ll.createList(10);
            const target = list.searchByIndex(11);

            expect(target).toBeNull();
        })
    })
    describe('the list is empty', () => {
        test('it return null', () => {
            const ll = new LinkedList();

            const target = ll.searchByIndex(3);

            expect(target).toBeNull();
        })
    })

    describe('index exists in a list', () => {
        test('it returns correct value', () => {
            const ll = new LinkedList();
            const list = ll.createList(10);
            console.log(list);
            const target = list.searchByIndex(5);

            expect(target.value).toBe('5');
        })
    })
})

describe('#insertAtIndex', () => {
    describe('index is negative', () => {
        test('function returns', () => {
            const list = new LinkedList().createList(10);
            const oldSize = list.size;
            list.insertAtIndex(-1, 50);

            expect(list.size).toBe(oldSize);
        })
    })
    describe('index is greater than the list size', () => {
        test('function returns', () => {

            const list = new LinkedList().createList(10);
            const oldSize = list.size;
            list.insertAtIndex(11, 50);

            expect(list.size).toBe(oldSize);
        })
    })
    describe('index is within the list bounds', () => {
        test('it inserts the element at the index', () => {
            const list = new LinkedList().createList(10);
            list.insertAtIndex(4, 50);
            const item = list.searchByIndex(4);

            expect(item.value).toBe(50);

        })
    })
    describe('if index is 0, element should be the head', () => {
        test('it inserts at the head', () => {
            const list = new LinkedList().createList(10);
            list.insertAtIndex(0, 50);

            expect(list.head.value).toBe(50);
        })
    })
    describe('if index equals the size', () => {
        test('it adds to the tail', () => {
            const list = new LinkedList().createList(10)
            list.insertAtIndex(10, 50);
            const target = list.searchByIndex(10);

            expect(target.value).toBe(50);
        })
    })
})

describe('#removeHead', () => {
    describe('if the list is empty', () => {
        test('it returns null', () => {
            const list = new LinkedList();
            const removedHead = list.removeHead();

            expect(removedHead).toBeNull();

        })

    })
    describe('the list has more than 1 node', () => {
        test('it returns old head and the new head is the next node', () => {
            const list = new LinkedList().createList(2);
            const removedHead = list.removeHead();

            expect(removedHead.value).toBe('0');
            expect(list.head.value).toBe(removedHead.next.value);


        })

    })
    describe('the list has only head node', () => {
        test('it returns old head and the new head is null', () => {
            const list = new LinkedList().createList(1);
            const removedHead = list.removeHead();

            expect(removedHead.value).toBe('0');
            expect(list.head).toBeNull();


        })

    })

})

describe('#removeTail', () => {
    describe('the list is empty', () => {
        test('it returns null', () => {
            const list = new LinkedList();
            const removedTail = list.removeTail();

            expect(removedTail).toBeNull();

        })
    })
    describe('the list has only the head', () => {
        test('it returns the head and now list is empty', () => {
            const list = new LinkedList().createList(1);
            const removedTail = list.removeTail();

            expect(removedTail.value).toBe('0');
            expect(list.head).toBeNull();
            expect(list.size).toBe(0);

        })
    })
    describe('the list more than 1 node', () => {
        test('it returns the removed tail and size shrinks', () => {
            const list = new LinkedList().createList(10);
            const oldSize = list.size;
            const removedTail = list.removeTail();

            expect(removedTail.value).toBe('9');
            expect(list.head.value).toBe('0')
            expect(list.size).toBeLessThan(oldSize);

        })
    })
})

describe('#removeByData', () => {
    describe('the list is empty', () => {
        test('it returns null', () => {
            const list = new LinkedList();
            const removedNode = list.removeByData(5);

            expect(removedNode).toBeNull();

        })
    })
    describe('the list has only the head', () => {
        test('it returns the head and now list is empty', () => {
            const list = new LinkedList().createList(1);
            const removedNode = list.removeByData('0');

            expect(removedNode.value).toBe('0');
            expect(list.head).toBeNull();
            expect(list.size).toBe(0);

        })
    })
    describe('the list more than 1 node', () => {
        test('it returns the removed node and size shrinks', () => {
            const list = new LinkedList().createList(10);
            const oldSize = list.size;
            const removedNode = list.removeByData('7');

            expect(removedNode.value).toBe('7');
            expect(list.head.value).toBe('0')
            expect(list.size).toBeLessThan(oldSize);

        })
    })
    describe('the list doesnt have the required node', () => {
        test('it returns null', () => {
            const list = new LinkedList().createList(10);
            const oldSize = list.size;
            const removedNode = list.removeByData(95);

            expect(removedNode).toBeNull();
            expect(list.size).toBe(oldSize);

        })
    })
})

describe('#search', () => {
    describe('the list is empty', () => {
        test('it returns null', () => {
            const list = new LinkedList();
            const target = list.search('5');

            expect(target).toBeNull();

        })
    })
    describe('the list is not empty and it has target', () => {
        test('it returns target', () => {
            const list = new LinkedList().createList(10);
            const target = list.search('5');

            expect(target.value).toBe('5');

        })
    })
    describe('the list doesnt have the target', () => {
        test('it returns null', () => {
            const list = new LinkedList().createList(10);
            const target = list.search('95');

            expect(target).toBeNull();


        })
    })
})

/* Function tests */

describe('function reversedList(list)', () => {
    describe('should return linked list in a reversed order', () => {
        test('given 15>4>8>6 returns 6>8>4>15', () => {
            const list = new LinkedList();
            list.addToHead(15);
            list.addToTail(4);
            list.addToTail(8);
            list.addToTail(6);
            const reversed = reversedList(list);
          
            const secondNode = reversed.searchByIndex(1);
            const thirdNode = reversed.searchByIndex(2);
            const fourthNode = reversed.searchByIndex(3);

            expect(reversed.head.value).toBe(6);
            expect(secondNode.value).toBe(8);
            expect(thirdNode.value).toBe(4);
            expect(fourthNode.value).toBe(15);


        })
    })
})

describe('function getMiddle(list)', () => {
    describe('should return middle node from linked list', () => {
        test('given 15>4>8>6 returns 8', () => {
            const list = new LinkedList();
            list.addToHead(15);
            list.addToTail(4);
            list.addToTail(8);
            list.addToTail(6);

            const middle = getMiddle(list);

            expect(middle.value).toBe(8);


        })
    })
})

describe('function swapNodes(list, valueOne, valueTwo)', () => {
    describe('should return linked list with swapped nodes', () => {
        test('given list = 0>1>2>3>4>5 swapNodes(list, 4, 5) returns 0>1>2>3>5>4', () => {
            const list = new LinkedList().createList(6);

            const swapped = swapNodes(list, '4', '5');
            const fourthNode = swapped.searchByIndex(4);
            const fifthNode = swapped.searchByIndex(5)

            expect(fourthNode.value).toBe('5');
            expect(fifthNode.value).toBe('4');



        })
        test('given list = data1>data2>data3>data4>data5>data6 swapNodes(list, data5, data3) returns data1>data2>data5>data4>data3>data6', () => {
            const list = new LinkedList()
            list.addToTail('data1');
            list.addToTail('data2');
            list.addToTail('data3');
            list.addToTail('data4');
            list.addToTail('data5');
            list.addToTail('data6');

            const swapped = swapNodes(list, 'data5', 'data3');
            const thirdNode = swapped.searchByIndex(2);
            const fifthNode = swapped.searchByIndex(4)

            expect(thirdNode.value).toBe('data5');
            expect(fifthNode.value).toBe('data3');



        })
    })
    describe('if head is swapped', () => {
        test('list has new head', () => {
            const list = new LinkedList().createList(10);
            
            const swapped = swapNodes(list, '0', '5');

            expect(swapped.head.value).toBe('5');
        })
    })
    describe('if one or both elements dont exist', () => {
        test('throws an error', () => {
            const list = new LinkedList().createList(10);

            expect(() => swapNodes(list, '1', '95')).toThrow(Error);
        })
    })
    describe('if list is empty or consists of one element only', () => {
        test('throws an error', () => {
            const list = new LinkedList().createList(1);

            expect(()=> swapNodes(list, '0', '1')).toThrow(Error)
        })
    })
    describe('if elements to swap are the same', () => {
        test('throws an error', () => {
            const list = new LinkedList().createList(10);

            expect(() => swapNodes(list, '4', '4')).toThrow(Error);
        })
    })
})

describe('reverseBetween(head, left, right)', () => {
    describe('given list 0>1>2>3>4>5', () => {
        test('reverseBetween(list, 2,4) returns 0>3>2>1>4>5', () => {
            const list = new LinkedList().createList(6);
            const reversed = reverseBetween(list, 2, 4);
            console.log(reversed)
            const arr = toArray(reversed);
            const result = arr.join(',') === '0,3,2,1,4,5';

            expect(result).toBe(true);
        })
    })
    describe('given list 0>1', () =>{
        test('returns 1>0', () => {
            const list = new LinkedList().createList(2);
            const reversed = reverseBetween(list, 1, 2)
            const arr = toArray(reversed);
            const result = arr.join(',') === '1,0';

            expect(result).toBe(true);
        })
    })
})