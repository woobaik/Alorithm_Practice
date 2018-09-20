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

  def my_all?
    return false if self.length < 1
    result = []
    self.my_each do |x|
      result << x if yield(x)
    end
    self == result
  end

  def my_any?
    result = []
    self.my_each do |x|
      result << x if yield(x)
    end
    !(result.empty?)
  end

  def my_reverse
    return self if self.length < 2
    result = []
    self.each do |x|
      result.unshift(x)
    end
    result
  end

  def my_count
    result = 0

    self.my_each do |i|
      result += 1
    end
    result
  end

  def my_none?
    result = []
    self.my_each do |x|
      result << x if yield(x)
    end
    result.empty?
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


#test my_all?

arr2.my_all? {|x| x % 1 == 0}

#test my_any?
arr2.my_any? {|x| x % 11 == 0}

#my_reverse
["a","b","c"].my_reverse
["a"].my_reverse

#my count
["a","b","c"].my_count
["a"].my_count
[].


#my_none

arr2.my_none? {|x| x % 10 == 0}
