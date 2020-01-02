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

const weave = (first, second) => {
  const result = []

  while (first.peek() && second.peek()) {
    result.push(first.remove())
    result.push(second.remove())
  }

  if (first.peek()) {
    while (first.peek() !== undefined) {
      result.push(first.remove())
    }
  } else {
    while (second.peek() !== undefined) {
      result.push(second.remove())
    }
  }
}
