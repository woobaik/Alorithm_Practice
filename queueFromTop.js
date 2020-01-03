const Stack = require("./stack")

class Queue {
  constructor() {
    this.first = new Stack()
    this.second = new Stack()
  }

  add(record) {
    this.first.push(record)
  }

  remove() {
    while (this.first.peek()) {
      const record = this.first.pop()
      this.second.push(record)
    }

    this.second.pop()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }
  }

  peek() {
    while (this.first.peek()) {
      const record = this.first.pop()
      this.second.push(record)
    }

    const result = this.second.peek()

    while (this.second.peek()) {
      this.first.push(this.second.pop())
    }

    return result
  }
}
