def roman_to_int(s)
    roman = {
        M: 1000,
        CM: 900,
        D: 500, 
        CD: 400,
        C: 100,
        XC: 90,
        L: 50, 
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1    
        }
    result = 0
    dup = s
    while dup.length > 0 
        roman.each do |key,val|
            if dup.start_with?(key.to_s)
                result += val
                dup.sub!(key.to_s,'')
            end
        end
    end
    result
end