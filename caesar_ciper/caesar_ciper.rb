ALPHABET = ("a".."z").to_a
CAPS = ("A".."Z").to_a
NUMS = (1..10).to_a
=begin
  lower => [97.. 122]
  caps => [65.. 90]

=end
def caesar_ciper(str, pre_shift)
  crypted = []

  str.split("").each do |char|
      # ***** case char is a letter case *****
    if (char.ord >  96 && char.ord < 123) || (char.ord > 64 &&          char.ord < 91)

      shift = pre_shift % 26
      crypted << (char.ord + shift).chr
    else
      crypted << char
    end
    
  end
  crypted.join
end

caesar_ciper("happy Is  1", 1)
