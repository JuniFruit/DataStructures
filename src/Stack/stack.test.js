import { Stack } from './Stack.js'


describe('#push', () => {
    describe('adds an element to the head', () => {
        test('it adds to the head', () => {
            const stack = new Stack(10);
            stack.push(1);
            stack.push(2);
            const head = stack.stack.head;

            expect(head.value).toBe(2);
        })
    })
    describe('returns if the stack is full', () => {
        test('it returns', () => {
            const stack = new Stack(1);
            stack.push(1);
            const oldSize = stack.size
            stack.push(2);
            const newSize = stack.size;

            expect(oldSize).toBe(newSize);
        })
    })
})
describe('#pop', () => {
    describe('pops an element at the head', () => {
        test('it pops the head and returns it', () => {
            const stack = new Stack(10);
            stack.push(1);
            stack.push(2);
            const removed = stack.pop();
            const head = stack.stack.head;

            expect(head.value).toBe(1);
            expect(removed.value).toBe(2);
        })
    })
    describe('returns if the stack empty', () => {
        test('it returns null and size is not changed', () => {
            const stack = new Stack();
            const oldSize = stack.size
            const removed = stack.pop()
            const newSize = stack.size;

            expect(oldSize).toBe(newSize);
            expect(removed).toBeNull();
        })
    })
})

describe('#peek', () => {
    describe('should return head', () => {
        test('it returns head', () => {
            const stack = new Stack(10);
            stack.push(1);
            stack.push(2);
            const peeked = stack.peek();
            expect(peeked.value).toBe(2);
           
        })
    })
    describe('returns null if the stack empty', () => {
        test('it returns null', () => {
            const stack = new Stack();
            const peeked = stack.peek();
                       
            expect(peeked).toBeNull();
        })
    })
})