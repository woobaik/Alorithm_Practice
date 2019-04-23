class Node {
  constructor(value) {
    this.value = value
    this.left= null
    this.right = null
  }
}

class binarySearch {
  constructor() {
    this.root = null
    this.length = 0
  }
  insert(value) {
    const newNode = new Node(value)
    
    if (this.length === 0) {
      this.root = newNode 
      return this
    }
    let currentNode = this.root;
    
    while (true) {
      if (value < currentNode) {
        if (!currentNode.left) {
          currentNode.left = value
          return this
        }
      }
      currentNode = currentNode.left
    }
        
  }
}

const hao = new binarySearch()
hao.insert(21)
hao.insert(3)