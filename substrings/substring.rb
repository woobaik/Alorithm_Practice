# Implement a method #substrings that takes a word as the first argument
# and then an array of valid substrings (your dictionary) as the second argument.
# It should return a hash listing each substring (case insensitive)
# that was found in the original string and how many times it was found.


def substrings(sentence,dictionary)
  result = Hash.new(0)
  sentence.downcase.split.each do |word|
    substrs = break_word(word)
    substrs.each do |substr|
      result[substr] += 1 if dictionary.include?(substr)
    end
  end

  result
end

def break_word(str)
  word = str.split("")
    (0...str.length).each do |starting_idx|
      (starting_idx+1...str.length).each do |ending_idx|
      word << str[starting_idx..ending_idx]
      end
    end
  word
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
substrings("Howdy partner, sit down! How's it going?", dictionary)
