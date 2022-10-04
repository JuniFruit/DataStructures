import { TreeNode } from "./Tree";

describe('#addChild', () => {
    describe('Should add a node as a child to the parent node', () => {
        test('It adds 2 children to the root node', () => {
            const tree = new TreeNode('root');
            tree.addChild('child1');
            tree.addChild(new TreeNode('child2'));

            const child1 = tree.children[0];
            const child2 = tree.children[1];

            expect(child1.data).toBe('child1');
            expect(child2.data).toBe('child2');
        })
    })
})

describe('#removeChild', () => {
    describe('Should remove a node from the parent\s children list', () => {
        test('It removes child1 from the root\'s children. Works for node instance or just data', () => {
            const tree = new TreeNode('root');
            const child2 = new TreeNode('child2')
            tree.addChild('child1');
            tree.addChild(child2);
            child2.addChild('child3');

            tree.removeChild('child3');
    
            expect(child2.children.length).toBe(0);
            tree.removeChild(child2);
            expect(tree.children[0].data).toBe('child1')
        })
    })
})

describe('#depthTraversal', () => {
    describe('Should traverse in depth of a tree', () => {
        test('It returns children of parent nodes', () => {
            const tree = new TreeNode(0);
            tree.addChild(1);
            tree.addChild(2);

            tree.children[0].addChild(3)
            tree.children[0].addChild(4);
            tree.children[1].addChild(5);
            tree.children[1].addChild(6);

            const expectedArr = [0,1,3,4,2,5,6];
            const resultArr = tree.depthTraversal();
            const isDifferent = resultArr.some((item, index) => item !== expectedArr[index])

            expect(isDifferent).toBe(false);

        })
    })
})

describe('#breadthTraversal', () => {
    describe('Should traverse horizontally through a tree', () => {
        test('It returns siblings first', () => {
            const tree = new TreeNode(0);
            tree.addChild(1);
            tree.addChild(2);

            tree.children[0].addChild(3)
            tree.children[0].addChild(4);
            tree.children[1].addChild(5);
            tree.children[1].addChild(6);

            const expectedArr = [0,1,2,3,4,5,6];
            const resultArr = tree.breadthTraversal();
            const isDifferent = resultArr.some((item, index) => item !== expectedArr[index])

            expect(isDifferent).toBe(false);

        })
    })
})