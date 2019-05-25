def urlify(str)

  result = ''
  str.each_char do |char|
    if char == ' '
      result += '%20'
    else 
      result += char
    end 
  end
  result
end

urlify('apple is red bean')