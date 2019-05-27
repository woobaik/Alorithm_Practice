def one_away(str1,str2)
    s1_length = str1.length
    s2_length = str2.length 
    i = 0
    j = 0
    count_number = 0

    if (s1_length - s2_length).abs > 1 
        return false 
    end

    while i < s1_length && j < s2_length 
        if str1[i] == str2[j]
            i += 1
            j += 1 
        elsif str1[i] != str2[j] && s1_length < s2_length
            count_number += 1
            j += 1 
        else 
            count_number += 1 
            i += 1 
        end
    end

    count_number > 1 ? false : true
end