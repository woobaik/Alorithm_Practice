class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value)
      return this
    }
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          currentNode.left = new Node(value)
          currentNode = null
        }
      } else {
        if (currentNode.value <= value) {
          if (currentNode.right) {
            currentNode = currentNode.right
          } else {
            currentNode.right = new Node(value)
            currentNode = null
          }
        }
      }
    }
    return this
  }
  lookup(value) {
    let currentNode = this.root
    if (!currentNode) {
      return false
    }

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left
        } else {
          return false
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right
        } else {
          return false
        }
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

JSON.stringify(traverse(tree.root))
tree.lookup(4)
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
