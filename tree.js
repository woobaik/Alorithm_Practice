class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    const node = new Node()
    this.children.push(node)
  }
}
