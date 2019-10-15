class NewNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(input) {
    this.head = new NewNode(input)
    this.tail = this.head
    this.length = 1
  }

  prepend(value) {
    const newNode = new NewNode(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }

  append(value) {
    const newNode = new NewNode(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
  }

  showArray() {
    let currentNode = this.head
    const result = []

    while (currentNode !== null) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }
    return result
  }

  traverse(index) {
    let currentNode = this.head

    if (index <= 0) {
      return this.head
    }
    if (index > this.length) {
      return this.tail
    }
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert(index, value) {
    const newNode = new NewNode(value)
    if (index < 1) {
      return this.prepend(value)
    }

    if (index > this.length - 1) {
      return this.append(value)
    }
    const prevNode = this.traverse(index - 1)
    const nextNode = prevNode.next

    prevNode.next = newNode
    newNode.next = nextNode
    this.length += 1
  }

  remove(index) {
    if (index < 1) {
      this.head = this.head.next
      this.length -= 1
      return this
    }

    if (index > this.length - 1) {
      const prev = this.traverse(this.length - 2)
      prev.next = null
      this.tail = prev
      this.length -= 1
      return this
    }

    const prevNode = this.traverse(index - 1)
    const targetNode = prevNode.next
    const newTarget = targetNode.next
    prevNode.next = newTarget
    this.length -= 1
  }
}

const newList = new LinkedList(1)
newList.prepend(2)
newList.append(1)
newList.prepend(3)
newList.insert(1, 4)
newList.insert(4, 4)
newList.insert(1, 8)
newList.insert(0, 1)
newList.remove(0)
newList.remove(6)
newList.remove(2)
newList.showArray()
