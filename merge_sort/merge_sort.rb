def merge(left,right)
    if left.empty?
      right
    elsif right.empty?
      left
    elsif left[0] < right[0]
      [left[0]] + merge(left[1..-1], right)
    else
      [right[0]] + merge(left, right[1..-1])
    end

end

def merge_sort(list)
  if list.length <= 1
    list
  else
    mid = (list.length / 2).floor
    left = merge_sort(list[0..mid - 1])
    right = merge_sort(list[mid..-1])
    merge(left,right)
  end
end

test = Array.new(30) {rand(100)}
merge_sort(test
