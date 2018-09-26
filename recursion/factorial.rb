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
