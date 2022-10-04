export class MinHeap {
    constructor() {
        this.heap = [null]
        this.size = 0;
    }


    addValue(value) {

        this.heap.push(value);
        this.size++;
        this.bubbleUp();
    }

    popMin() {
        this.swap(1, this.size);
        const popped = this.heap.pop();
        this.size--;
        this.heapify();
        
        return popped;
    }

    bubbleUp() {
        let currentInd = this.size;

        while (currentInd > 1 && this.heap[this.getParentInd(currentInd)] > this.heap[currentInd]) {
            this.swap(this.getParentInd(currentInd), currentInd);
            currentInd = this.getParentInd(currentInd);
        }
    }

    heapify() {
        let current = 1;
        let rightChild = this.getRightChildInd(current);
        let leftChild = this.getLeftChildInd(current);

        while (this.canSwap(current, leftChild, rightChild)) {
            if (this.checkExist(leftChild) && this.checkExist(rightChild)) {
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                }
                
            } else {
                this.swap(current, leftChild);
                current = leftChild;
            }
            rightChild = this.getRightChildInd(current);
            leftChild = this.getLeftChildInd(current);
        }
    }

    swap(ind1, ind2) {
        [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]];
    }

    canSwap(current, leftChild, rightChild) {
        return this.checkExist(leftChild) && this.heap[current] > this.heap[leftChild] 
            || this.checkExist(rightChild) && this.heap[current] > this.heap[rightChild]
    }
    checkExist(ind) {
        return ind <= this.size;
    }
    getParentInd(current) {
        return Math.floor(current/2);
    }
    getLeftChildInd(current) {
        return current * 2;
    }
    getRightChildInd(current) {
        return current * 2 + 1;
    }

}
