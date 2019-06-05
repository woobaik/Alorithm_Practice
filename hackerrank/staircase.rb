#!/bin/ruby

require 'json'
require 'stringio'

# Complete the staircase function below.
def staircase(n)
    str = ' ' * n
    i = str.length - 1
    while i > -1 
        str[i] = '#'
        puts str 
        i -= 1 
    end
end

n = gets.to_i

