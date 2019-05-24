# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    # edge cases, change following statement if needed
    if strs.nil? || strs.empty?
        return ''
    end
    
    prefix = strs.max{|x,y| x.length<=>y.length}
    
    strs.each do |word|
        while !word.start_with?(prefix)
            prefix = prefix[0...-1]
        end
    end
    prefix
    
end