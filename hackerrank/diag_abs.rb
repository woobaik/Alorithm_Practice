#!/bin/ruby

require 'json'
require 'stringio'

# Complete the diagonalDifference function below.
def diagonalDifference(arr)
    i = 0 
    pri_diag = 0 
    sec_diag = 0
    while i < arr.length 
        pri_diag += arr[i][i]
        sec_diag += arr[i][arr.length-1-i]
        i += 1
    end
    (pri_diag - sec_diag).abs

end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.to_i

arr = Array.new(n)

n.times do |i|
    arr[i] = gets.rstrip.split(' ').map(&:to_i)
end

result = diagonalDifference arr

fptr.write result
fptr.write "\n"

fptr.close()
