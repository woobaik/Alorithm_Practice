module Enumerable

  def my_each
    i = 0
    while i < self.length
      yield(self[i])
      i += 1
    end
    self
  end

  def my_each_with_index
    i = 0
    while i < self.length
      yield(self[i], i)
      i += 1
    end
    self
  end





end


arr = %w(a b c d e)
#test my_each

arr.my_each do |x|
  puts x + "aa"
end

#test my_each_with_index
arr.my_each_with_index do |x, i|
  puts "#{i} : #{x}"
end
