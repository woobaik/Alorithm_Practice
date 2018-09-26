# Write a function that accepts a string, and returns true if it is in the form of a phone number.
# Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
#
# Only worry about the following format:
# (123) 456-7890 (don't forget the space after the close parentheses)
#
# Examples:

def valid_phone(str)
  if str.length != 14
    return false
  elsif str[0] != "(" || str[4] != ")" || str[5] != " " && str[-5] != "-"
    return false
  end
  true
end



# !!(phoneNumber[/\A\(\d{3}\)\s\d{3}-\d{4}\z/]);

 !!phoneNumber[/\A\(\d{3}\)\s\d{3}-\d{4}\z/]
