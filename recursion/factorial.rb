def factorial(num)
  return 1 if num == 1
  num * factorial(num -1)
end

# factorial(10)

def palindrome(str)
  return true if str.length == 1 || str.length == 0
    if str[0] == str[-1]
      palindrome(str[1..-2])
    else
      false
    end
end

def z_counter(n)
  if n == 0
    puts "nomore bottles of beer on the wall"
    return true
  else
    puts "#{n} bottles of beer on the wall"
    z_counter(n-1)
  end
end


def flatten(arrs)
  result = []
  arrs.each do |arr|
    if arr.length == 1
      result << arr
    else
      flatten(arr)
    end
  end
  result
end
