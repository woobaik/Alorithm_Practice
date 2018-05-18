# Given a string of words, you need to find the highest scoring word.
#
# Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
#
# You need to return the highest scoring word as a string.
#
# If two words score the same, return the word that appears earliest in the original string.
#
# All letters will be lowercase and all inputs will be valid.


def high(x)
  highest_word = ""
  x.split.each do |word|
    if sum_num(highest_word) < sum_num(word)
      highest_word = word
    else
      highest_word
    end
  end
  highest_word
end


def sum_num(word)

  alph_val = {}
  alph = ("a".."z").to_a

  alph.each do |chr|
    alph_val[chr] = alph.find_index(chr)
  end

  word.split("").reduce(0) {|total, current| total + alph_val[current]}

end



# ====================================

solution from codewar
