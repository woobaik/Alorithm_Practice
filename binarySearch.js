class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bsearch {
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node(value)
    
    if (this.root === null) {
      this.root = newNode
      return this
    }
    
    let currentNode = this.root
    while (true) {
      if (value < currentNode.value) {
        
        if (!(currentNode.left)) {
          currentNode.left = newNode;
          return this
        } else {
          currentNode = currentNode.left
        }
      } else {
        
        if (!(currentNode.right)) {
          currentNode.right = newNode;
          return this
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this
  }
  
};

const tree = new Bsearch()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(0)
tree.insert(-1)
console.log(tree)

