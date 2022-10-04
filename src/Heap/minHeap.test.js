import { MinHeap } from "./MinHeap";

describe('#addValue', () => {
    describe('Should add value to the heap', () => {
        test('It adds 3 to the heap', () => {
            const heap = new MinHeap();
            heap.addValue(3);

            expect(heap.heap[1]).toBe(3);
        })

    })
    describe('Should bubble up added value if it\'s less than a parent', () => {
        test('It swaps added value with its parent until min condition is met', () => {
            const heap = new MinHeap();
            heap.addValue(3);
            heap.addValue(4);
            heap.addValue(5);
            heap.addValue(6);
            heap.addValue(2);

            expect(heap.heap[1]).toBe(2);
        })
    } )
})

describe('#popMin', () => {
    describe('Should return the min value from the heap', () => {
        test('It returns the min value', () => {
            const heap = new MinHeap();
            heap.addValue(3)          
            heap.addValue(4);
            heap.addValue(5);
            heap.addValue(8);
            heap.addValue(6);
            heap.addValue(9);
            heap.addValue(10);


            const minValue = heap.popMin();

            expect(minValue).toBe(3);
        })
    })
    describe('Should restore heap after popping a min value', () => {
        test('It restores the heap, so the root node is the min value', () => {
            const heap = new MinHeap();
            heap.addValue(3)          
            heap.addValue(4);
            heap.addValue(5);

            heap.popMin();

            expect(heap.heap[1]).toBe(4);
        })
    })
})

/* Helper heap methods */

describe('#getParentInd', () => {
    describe('Should return parent index of passed in index', () => {
        test('It returns parent index', () => {
            const heap = new MinHeap();

            heap.addValue(3)
            heap.addValue(4)
            heap.addValue(5)
            heap.addValue(6)

            const parentOfLeaf = heap.getParentInd(heap.size);

            expect(parentOfLeaf).toBe(2);



        })
    })
})

describe('#getLeftChildInd', () => {
    describe('Should return left child index of passed in index', () => {
        test('It returns left child index', () => {
            const heap = new MinHeap();

            heap.addValue(3)
            heap.addValue(4)
            heap.addValue(5)
            heap.addValue(6)

            const leftChild = heap.getLeftChildInd(2);

            expect(leftChild).toBe(4);



        })
    })
})

describe('#getParentInd', () => {
    describe('Should return right child index of passed in index', () => {
        test('It returns right child index', () => {
            const heap = new MinHeap();

            heap.addValue(3)
            heap.addValue(4)
            heap.addValue(5)
            heap.addValue(6)

            const rightChild = heap.getRightChildInd(1);

            expect(rightChild).toBe(3);



        })
    })
})

describe('#canSwap', () => {
    describe('Should return true or false whether we able to swap element or not', () => {
        test('It returns false when there is only one element in the array', () => {
            const heap = new MinHeap();

            heap.addValue(3);

            const canSwap = heap.canSwap(1, 2, 3);

            expect(canSwap).toBe(false);
        })
        test('It return false when children are bigger than parent', () => {
            const heap = new MinHeap();

            heap.addValue(3);
            heap.addValue(4);
            heap.addValue(5);

            const canSwap = heap.canSwap(1,2,3);

            expect(canSwap).toBe(false);
        })
    })
})