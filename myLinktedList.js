class myList {
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
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1
  }

  print(value) {
    const array = [];
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  find(index) {
    if (index > this.length || index < 0) {
      return false
    }
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter += 1
    }
    return currentNode
  }

  insert(index, value) {
    if (index === 0 ) {
     return this.prepend(value)
    }
    if (index > this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value, 
      next: null
    }
    const prevNode = this.find(index-1)
    const nextNode = prevNode.next
    prevNode.next = newNode
    newNode.next = nextNode 
    this.length += 1
  }

  remove(index) {
    if (index === 0) {
      return this.head = this.head.next
    }
    if (index > this.length-1) {
      return false
    }
    const prevNode = this.find(index -1);
    const target = prevNode.next;
    const nextNode = target.next;

    prevNode.next = nextNode
    this.length -= 1

  }
}

const li = new myList(2);
li.append(3);
li.append(4);
li.prepend(1)
li.insert(0,0)
li.insert(0,-1)
li.insert(1,0.5)
li.insert(9900,9)
li.remove(1)
li.remove(1)
li.print()


// refactor => make a newNode class.