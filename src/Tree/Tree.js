export class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = []
    }

    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child)

        } else {
            this.children.push(new TreeNode(child));
        }
    }
    removeChild(childToRemove) {
        const length = this.children.length;

        this.children = this.children.filter(child => {
            if (childToRemove instanceof TreeNode) {
                return child.data !== childToRemove.data
            } else {
                return child.data !== childToRemove;
            }
        })

        if (length === this.children.length) {
            this.children.forEach(child => {
                child.removeChild(childToRemove);
            })
        }
    }
    depthTraversal(prevArr = []) {
        const arr = [...prevArr];
        arr.push(this.data);
        this.children.forEach(child => child.depthTraversal(arr))
        return arr;
    }
    breadthTraversal() {
        const arr = [];
        let queue = [this];

        while (queue.length) {
            let current = queue.shift();
            queue = queue.concat(current.children);
            arr.push(current.data);
        }
        return arr;

    }
}