class Node 
  attr_accessor :value, :next
  def initialize(value)
    @value = value
    @next = nil 
  end
end

class Linked_list 
  attr_accessor :head, :tail 

  def initialize(value)
    @head = Node.new(value)
    @tail = @head 
  end

  def append(value)
    new_node = Node.new(value)
    @tail.next = new_node
    @tail = new_node
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
list.print