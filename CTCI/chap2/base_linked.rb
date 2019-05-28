class Node 
  attr_accessor :value, :next
  def initialize(value)
    @value = value
    @next = nil 
  end
end

class Linked_list 
  attr_accessor :head, :tail, :length

  def initialize(value)
    @head = Node.new(value)
    @tail = @head 
    @length = 1
  end

  def append(value)
    new_node = Node.new(value)
    @tail.next = new_node
    @tail = new_node
    @length += 1
  end

  def prepend(value)
    new_node = Node.new(value)
    new_node.next = self.head
    @head = new_node
    @length += 1
  end

  def insert(value,index)
    new_node = Node.new(value)
    if index == 0 
      new_node.next = self.head
      self.head = new_node
    end
    lead = self.traverse(index - 1)
    following = lead.next 
    lead.next = new_node
    new_node.next = following 
  end
  
  def traverse(idx)
    if idx == 0 
      return self.head
    end
    if idx > @length - 1
      return self.tail
    end

    i = 0 
    current_node = self.head 
    while i < idx
      current_node = current_node.next
      i += 1 
    end    
    current_node
  end


  def print
    result = []
    current_node = self.head
    while current_node 
      result << current_node.value
      current_node = current_node.next
    end
    return result 
  end
end

list = Linked_list.new('apple')
list.append('pear')
list.append('chicken')
list.prepend('juntal')
list.insert('il',3)
list.print