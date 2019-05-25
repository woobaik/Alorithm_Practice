def check_permutation(str1,str2)
  if str1.length != str2.length 
    return false
  end

  return true if str1.sort == str2
  return false
end

check_permutation('apple', 'ap')