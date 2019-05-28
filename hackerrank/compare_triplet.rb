#!/bin/ruby

require 'json'
require 'stringio'

# Complete the compareTriplets function below.
def compareTriplets(a, b)
    i = 0 
    result = Array.new(2) {0}
    # we assume a, b has same length
    while i < a.length
        if a[i] > b[i]
            result[0] += 1
        elsif a[i] < b[i]
            result[1] += 1
        else
        end
        i += 1
    end
    result
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

a = gets.rstrip.split.map(&:to_i)

b = gets.rstrip.split.map(&:to_i)

result = compareTriplets a, b

fptr.write result.join " "
fptr.write "\n"

fptr.close()
