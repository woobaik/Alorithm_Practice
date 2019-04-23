class NewNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0;
  };

  peek() {
    if (this.length === 0 ) {
      return []
    }
    return this.top
  }

  push(value) {
    const newNode = new NewNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length += 1ㅁ
      return this
    }
    this.top.next = newNode
    this.top = newNode;
    this.length += 1
    return this
  }

  pop(value) {
    const lead = this.findLeadElement();
    lead.next = null;
    this.top = lead;
    this.length -= 1;
    return this
  }

  findLeadElement() {
    if (this.length < 2 ) {
      return this
    }
    let counter = 0
    let currentNode = this.bottom
    while ( counter < this.length - 2) {
      currentNode = currentNode.next
      counter += 1
    }
    return currentNode
  }

  isEmpty() {
    if (this.length === 0) {
      return true
    }
    return false

  }

}

const stackk = new Stack()

stackk.isEmpty()