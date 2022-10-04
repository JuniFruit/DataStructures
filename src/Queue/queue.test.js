import { Queue } from "./Queue";


describe('#enqueue', () => {
    describe('adds an element to the tail', () => {
        test('it adds to the tail', () => {
            const queue = new Queue(10);
            queue.enqueue(1);
            queue.enqueue(2);
            const tail = queue.queue.searchByIndex(1);

            expect(tail.value).toBe(2);
        })
    })
    describe('returns if the queue is full', () => {
        test('it returns', () => {
            const queue = new Queue(1);
            queue.enqueue(1);
            const oldSize = queue.size
            queue.enqueue(2);
            const newSize = queue.size;

            expect(oldSize).toBe(newSize);
        })
    })
})
describe('#dequeue', () => {
    describe('pops an element at the head', () => {
        test('it pops the head and returns it', () => {
            const queue = new Queue(10);
            queue.enqueue(1);
            queue.enqueue(2);
            const removed = queue.dequeue();
            const head = queue.queue.head;

            expect(head.value).toBe(2);
            expect(removed.value).toBe(1);
        })
    })
    describe('returns if the queue empty', () => {
        test('it returns null and size is not changed', () => {
            const queue = new Queue();
            const oldSize = queue.size
            const removed = queue.dequeue()
            const newSize = queue.size;

            expect(oldSize).toBe(newSize);
            expect(removed).toBeNull();
        })
    })
})

describe('#peek', () => {
    describe('should return head', () => {
        test('it returns head', () => {
            const queue = new Queue(10);
            queue.enqueue(1);
            queue.enqueue(2);
            const peeked = queue.peek();
            expect(peeked.value).toBe(1);
           
        })
    })
    describe('returns null if the queue empty', () => {
        test('it returns null', () => {
            const queue = new Queue();
            const peeked = queue.peek();
                       
            expect(peeked).toBeNull();
        })
    })
})