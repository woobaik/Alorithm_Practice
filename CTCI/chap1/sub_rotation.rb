def str_rotation(str1,str2)
  i = 0
  chunk = ''  
  

  while i < str2.length
    if substring?(str1, str2[0..i])
      chunk += str2[i]
      i += 1
    else
      break;
    end

  end

  rest_str = str2.sub(chunk,'')
  rest_str + chunk == str1 ? true : false
  
end

def substring?(str1, str2)
  str1.include?(str2)
end

# apple app

str_rotation('waterbottle', 'erbottlewat')