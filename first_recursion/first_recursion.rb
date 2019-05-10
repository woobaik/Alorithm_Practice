def recursion(arr) 
  mapping = {}

  arr.each do |ele|
    if !(mapping[ele])
      mapping[ele] = true
    else 
      return ele
    end
  end
  return nil
end


array = [1,2,4,5,3,7,8,12,4,12];

recursion(array)