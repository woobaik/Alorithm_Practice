def transform_90(arr)
  result = Array.new(arr.length) {Array.new(arr.length)}

  i = 0
  while i < arr.length 
    j = 0
    while j < arr.length 
      result[j][arr.length-1-i] = arr[i][j]
      j += 1
    end
    i += 1
  end
  result
end

arr =[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
  ]


  transform_90(arr)