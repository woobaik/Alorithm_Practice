# Complete the solution so that it splits the string into pairs of two characters.
# If the string contains an odd number of characters then
# it should replace the missing second character of the final pair with an underscore ('_').
#
# solution('abc') # should return ['ab', 'c_']
# solution('abcdef') # should return ['ab', 'cd', 'ef']

# def solution(str)
#   result = []
#   array = str.split("")
#   i = 0
#   while i < array.length
#     array[i+1] = "_" if array[i+1].nil?
#     result << array[i]+(array[i+1])
#     i += 2
#   end
#   p result
# end


def solution(str)
  (str+"_").scan /../
end

solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
