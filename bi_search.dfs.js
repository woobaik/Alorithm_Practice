class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch {
    constructor(value) {
        this.root = null;
    }

    insert(value) {
        if (!(this.root)) {
            this.root = new Node(value);
            return this
        }
        let currentNode = this.root;

        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = new Node(value)
                    return this;
                }
            } else {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = new Node(value);
                    return this
                }
            }
        }
    }

    breathSearch() {
        const list = [];
        const queue = [];
        let currentNode = this.root;
        if (currentNode) {
            queue.push(currentNode);
        }

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return list
    }

    dfsInorder() {
        return this.traverse(this.root, [])
    }

    traverse(node, array) {
        array.push(node.value)
        if (node.left) {
            this.traverse(node.left, array)
        }


        if (node.right) {
            this.traverse(node.right, array)
        }
        return array
    }

}



const bi = new BinarySearch();
bi.insert(9)
bi.insert(4);
bi.insert(6);
bi.insert(20);
bi.insert(170);
bi.insert(15);
bi.insert(1);

bi.dfsInorder();

//   1
// 2   3 
//4 5 6 7