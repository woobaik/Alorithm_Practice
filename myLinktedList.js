class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tale = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tale.next = newNode
    this.tale = newNode
    this.length += 1
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }

  print(value) {
    const result = [];  
    let currentNode = this.head
    while (currentNode) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }
    return result
  }

  find(index) {
    if (index === 0) {
      return this.head
    } else if (index >= this.length) {
      return -1
    } else if (index < 0) {
      return -1
    } else {
    let counter = 0;
    let currentNode = this.head

    while(counter !== index) {
      currentNode = currentNode.next
      counter += 1
    }
    return currentNode
    }
  }
  
  insert(index, value) {
    if (index === 0 ) {
      return this.prepend(value)
    }

    if (index > this.length) {
      return this.append(value)
    }
    const prevNode = this.find(index - 1);
    const nextNode = prevNode.next
    const newNode = {
      value: value, 
      next: null
    };
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length += 1
    return this
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      this.length -= 1
      return this
    }

    if (index >= this.length) {
      return this
    }
    const lead = this.find(index-1);
    const target = lead.next
    const nextNode = target.next
    lead.next = nextNode
  }

  reverse() {
    if (this.length < 2) {
      return this
    }
    let first = this.head;
    this.tale = this.head
    let second = first.next;
    
    while (second) {
      let temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null;
    this.head = first
    
    
    return this
  }
}

const li = new LinkedList(2)
li.append(3)
li.prepend(1)
li.insert(0,-1)
li.insert(1,1)
li.insert(2,99)
li.remove(0)
li.remove(4)
li.reverse()
li.print()
