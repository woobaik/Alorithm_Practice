# @param {String} s
# @return {Boolean}
def is_valid(s)
    return false if s.length.odd?
    
    paren = { 
        '{': '}',
        '[': ']',
        '(': ')'
        }
    
    stack = []
    s.each_char do |chr| 
        if paren[chr.to_sym]
            stack << chr
        elsif !stack.empty?
            return false if paren[stack.last.to_sym] != chr
            stack.pop
        else
            false
        end
    end
    stack.empty? ? true : false
end