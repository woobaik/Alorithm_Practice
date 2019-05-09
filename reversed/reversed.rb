def reversed(str)
  str.split('').reduce('') do |prev,current|
    current + prev
  end
  
end 

str = 'shoiwing it to us'

reversed(str)