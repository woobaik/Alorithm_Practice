module Enumerable

  def my_each
    i = 0
    while i < self.length
      yield(self[i])
      i += 1
    end
    self
  end






end

#test my_each
%w(a b c d e).my_each do |x|
  puts x + "aa"
end
