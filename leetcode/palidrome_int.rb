def is_palindrome(x)
    return false if x < 0
    return true if x < 10
    y = 0
    number = x 
    while number > 0
        y = y * 10
        y = y + number % 10 
        number = number / 10
    end
    
    x == y ? true : false
end