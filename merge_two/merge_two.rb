def sortedArray(arr1, arr2)
  result = []
  i = 0
  j = 0

  while result.length < arr1.length + arr2.length 
    if arr2[j] == nil 
      result.push(arr1[i])
      i += 1
    elsif arr1[i] == nil
      result.push(arr2[j])
      j += 1
    elsif 
      arr1[i] < arr2[j]
      result.push(arr1[i])
      i += 1

    else 
      result.push(arr2[j])
      j += 1
    end

  end
  return result
end 


arr1 = [1,3,4,6,8,9,10,14]
arr2 = [1,5,6,8,78,99]
sortedArray(arr1, arr2)