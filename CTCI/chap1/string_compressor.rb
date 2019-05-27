def str_comp(str)
  temp_char = str[0]
  count_char = 0
  i = 0
  result = ''
  while i < str.length 

    if str[i] == temp_char 
      count_char += 1

    else 
      result += "#{temp_char + count_char.to_s}"
      temp_char = str[i]
      count_char = 1 

    end

    if i == str.length - 1 
      result += "#{temp_char + count_char.to_s}"
    end
    i += 1
  end  
  return result
end


str_comp('aaccbbaa')