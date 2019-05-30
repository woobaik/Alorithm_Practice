#!/bin/ruby

require 'json'
require 'stringio'

# Complete the plusMinus function below.
def plusMinus(arr)
    leng = arr.length.to_f
    result = [0,0,0]
    arr.each do |num|
        if num > 0 
            result[0] += 1 
        elsif num < 0
            result[1] += 1
        else
            result[2] += 1
        end
    end
    
    puts '%.6f' % (result[0] / leng) 
    puts '%.6f' % (result[1] / leng)
    puts '%.6f' % (result[2] / leng)

end

n = gets.to_i

arr = gets.rstrip.split(' ').map(&:to_i)

plusMinus arr
