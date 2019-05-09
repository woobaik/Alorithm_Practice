def common(arr1, arr2) 

  checker = {}

  arr1.each do |arr1_element| 
    if (!(checker[arr1_element]))
      checker[arr1_element] = true
    end
  end

  arr2.each do |arr2_element| 
    if (checker[arr2_element]) 
      return true
    end
  end

  return false
end


arr1 = [3,1,5,2,3,6,7,8,2];
arr2 = [11,23,44,444,3];

common(arr1,arr2)