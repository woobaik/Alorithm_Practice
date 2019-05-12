class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linked {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1
        return this
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1
        return this
    }

    prepend(value) {
        const newNode = new Node(value);
        const nextNode = this.head;
        this.head = newNode;
        this.head.next = nextNode;
        this.length += 1
        return this
    }

    insert(index, value) {
        if (index < 1) {
            this.prepend(value)
            return this
        }

        const newNode = new Node(value);
        const lead = this.traverse(index - 1);
        const nextNode = this.traverse(index);
        newNode.next = nextNode;
        lead.next = newNode;
        this.length += 1;
        return this
    }

    traverse(index) {
        if (index > this.length - 1) {
            return this.tail
        }
        let i = 0
        let currentNode = this.head
        while (i !== index) {
            currentNode = currentNode.next;
            i += 1
        }
        return currentNode
    }

    delete(index) {
        if (index < 1) {
            this.head = this.head.next
            this.length -= 1
            return this
        }
        const lead = this.traverse(index - 1);
        const target = lead.next;
        const nextNode = target.next;

        lead.next = nextNode;
        this.length -= 1;
        return this
    }

    print() {
        const result = [];
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            result.push(currentNode.value)
            currentNode = currentNode.next
        }
        return result
    }

    reverse() {
        let currentNode = this.head;
        let nextNode = currentNode.next;

        this.tail = this.head;
        while (nextNode) {
            let followingNode = nextNode.next
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = followingNode
        }

        this.head = currentNode;
        this.tail.next = null
        return this
    }
}




const myLink = new Linked('first');
myLink.append('secod')
myLink.reverse()
myLink.print()

d