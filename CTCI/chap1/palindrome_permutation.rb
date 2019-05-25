str = 'aabbccddookkrrbb'

def palindrome(str)
  hash = {}
  str.each_char do |chr|
    if hash[chr]
      hash[chr] += 1
    else 
      hash[chr] = 1
    end
  end

  hash.each do |key,value|
    return false if hash[key].odd?
  end
  return true
end

palindrome(str)