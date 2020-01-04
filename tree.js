class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    const node = new Node()
    this.children.push(node)
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data
    })
  }
}
