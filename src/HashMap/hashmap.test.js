import { HashMap } from "./HashMap";

describe('#hash', () => {
    describe('Should return index within the bounds of the hash table', () => {
        test('it returns ', () => {
            const hashmap = new HashMap(5);
            const index = hashmap.hash('hello world');

            expect(index).toBe(2);
        })
    })
})

describe('#assign', () => {
    describe('Should add key-value pair to a bucket', () => {
        test('it hashes the \'hello world\' and adds key-value to the bucket', () => {
            const hashmap = new HashMap(5);
            hashmap.assign('hello', 'world');
            const assigned = hashmap.retrieve('hello');

            expect(assigned).toBe('world')
        })
    })
    describe('Should add a node to the linked list within a bucket if collision happened', () => {
        test('it adds a node to the linked list', () => {
            const hashmap = new HashMap(5);
            hashmap.assign('hello', 'world');
            hashmap.assign('string', 'world');
            const assigned = hashmap.retrieve('string');

            expect(assigned).toBe('world');
        })
    })
    describe('Should override the node value if the same key is passed', () => {
        test('it overrides the key\'s value', () => {
            const hashmap = new HashMap(5);
            hashmap.assign('string', 'program');
            hashmap.assign('hello', 'world');
            hashmap.assign('hello', 'program');
            const assigned = hashmap.retrieve('hello');

            expect(assigned).toBe('program')
        })
    })
})

describe('#retrieve', () => {
    describe('Should retrieve a value of a passed in key', () => {
        test(`it returns string 'world' of the key 'hello' `, () => {
            const hashmap = new HashMap(5);           
            hashmap.assign('hello', 'world');
            const retrieved = hashmap.retrieve('hello');

            expect(retrieved).toBe('world');
        })
    })
    describe('Should return null if key is not found', () => {
        test('It reuturns null of non-existing key', () => {
            const hashmap = new HashMap(5);
            hashmap.assign('hello', 'world');           
            const retrieved = hashmap.retrieve('string');

            expect(retrieved).toBeNull();
        })
    })
})