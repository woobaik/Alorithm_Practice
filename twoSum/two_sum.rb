def two_sum(arr,sum)
  result = []
  hashMap = {}

  arr.each do |ele|
    next_value = sum - ele

    if hashMap[next_value]
      result.push([ele, hashMap[next_value]])
    else 
      hashMap[ele] = ele
    end
  end

  return result
end

arr1 = [1,2,-6,3,4,5,-2,-3];

two_sum(arr1, -1)