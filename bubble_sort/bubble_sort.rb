def bubble_sort(arr)
  swapped = true

  while swapped
    swapped = false
    0.upto(arr.length-2) do |idx|
      if arr[idx] > arr[idx+1]
        arr[idx], arr[idx+1] = arr[idx+1], arr[idx]
        swapped = true
      end
    end
  end
  arr
end

bubble_sort([1,4,2,5,3,1,66])


def bubble_sort_by(arr)
  swapped = true

  while swapped
    swapped = false
    0.upto(arr.length-2) do |idx|
      if yield(arr[idx], arr[idx+1]) > 0
        arr[idx], arr[idx+1] = arr[idx+1], arr[idx]
        swapped = true
      end
    end
  end
  arr
end


bubble_sort_by(["a","hi","Chickafila","hello","hey"]) do |left,right|
  left.length - right.length
end
