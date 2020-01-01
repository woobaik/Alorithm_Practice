class Queue {
  constructor() {
    this.data = []
  }

  add(record) {
    this.data.unshift(record)
    return this.data
  }

  remove() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

const que = new Queue()
que.add("1")
console.log(que)
que.add("2")
console.log(que)
que.remove()
console.log(que, "")

que.peek()
