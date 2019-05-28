
#!/bin/ruby

require 'json'
require 'stringio'

# Complete the countingValleys function below.
def countingValleys(n, s)
    level = 0
    valley = 0
    s.each_char do |direction|
        if level == 0 && direction == 'D'
            valley += 1 
        end

        if direction == 'D'
            level -= 1
        else
            level += 1
        end
    end
    return valley
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.to_i

s = gets.to_s.rstrip

result = countingValleys n, s

fptr.write result
fptr.write "\n"

fptr.close()
