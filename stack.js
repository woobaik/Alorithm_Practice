class NewNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    const newNode = new NewNode(value)
    this.bottom = newNode
    this.top = newNode
    this.length = 1
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new NewNode(value)
    this.top.next = newNode
    this.top = newNode
    this.length += 1
    return this
  }

  pop() {
    const temp = this.findFollower()
    this.top = temp
    temp.next = null
    this.length -= 1
  }

  findFollower() {
    let currentNode = this.bottom
    let nextNode = currentNode.next
    let followingNode = nextNode.next
    while (followingNode) {
      currentNode = currentNode.next
      nextNode = nextNode.next
      followingNode = followingNode.next
    }
    return currentNode
  }

  showArray() {
    const result = []
    let currentNode = this.bottom
    while (currentNode) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }
    return result
  }
}

const stack = new Stack(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
stack.push(6)
stack.showArray()
