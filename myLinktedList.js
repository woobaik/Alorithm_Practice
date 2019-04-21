class Mylist {
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

    this.tale.next = newNode;
    this.tale = newNode;
    this.length += 1 
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode;
    this.length += 1
  }

  print() {
    const array = [];
    let currentNode = this.head;

    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  insert(index,value) {
    if (index === 0) {
      return this.prepend(value)
    }
    if (index > this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    }
    const lead = this.traverse(index - 1);
    const nextNode = lead.next
    newNode.next = nextNode
    lead.next = newNode
    this.length += 1;
  }

  remove(index) {
    // need to work on edge case when idx = 0
    if (index === 0) {
      this.length -= 1
      return this.head = this.head.next
    }

    if (index > this.length) {
      return false
    }
    const lead = this.traverse(index -1);
    const target = lead.next;
    const newTarget = target.next

    lead.next = newTarget;
    this.length -= 1
    return this
    
  }

  traverse(index) {
    let count = 0;
    let currentNode = this.head
    while (count !== index) {
      currentNode = currentNode.next
      count += 1      
    }
    return currentNode
  }
}

const list = new Mylist(1);
list.append(2)
list.prepend(0)
list.insert(0,1)
console.log(list)




//<head>*  *  *    *     *
//<next> \/ \/ 
