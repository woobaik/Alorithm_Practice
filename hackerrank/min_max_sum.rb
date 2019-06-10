#!/bin/ruby

require 'json'
require 'stringio'

# Complete the miniMaxSum function below.
def miniMaxSum(arr)
    arr.sort!
    small = arr[0...-1].sum
    large = arr[1..-1].sum
    puts "#{small} #{large}"

end

arr = gets.rstrip.split(' ').map(&:to_i)


