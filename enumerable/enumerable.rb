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


  def my_select
    result = []
    self.my_each do |el|
      result << el if yield(el)
    end
    result
  end



end


arr = %w(a b c d e)
arr2 = (1..10).to_a
#test my_each

arr.my_each do |x|
  puts x + "aa"
end

#test my_each_with_index
arr.my_each_with_index do |x, i|
  puts "#{i} : #{x}"
end

# test my_select
arr2.my_select {|x| x % 2 == 0}
