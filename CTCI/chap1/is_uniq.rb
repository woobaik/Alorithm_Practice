# def is_uniq(str)
#   return false if str.split('') != str.split('').uniq
#   true
# end


def is_uniq(str)
    if !str.is_a?(String)
        return false
    end
  hash = {}
  str.each_char do |chr|
    if hash[chr]
      return false
    else
      hash[chr] = 1
    end
  end
  return true
end
is_uniq('apt men5ss')

