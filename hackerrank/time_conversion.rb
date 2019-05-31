def timeConversion(s)
    arr = s.split(':')
    if arr.last[2..-1] == 'AM' && arr.first == '12'
        arr[0] = '00'
    elsif arr.last[2..-1] == 'PM' && arr.first == '12'
        arr[0] = '12'
    elsif arr.last[2..-1] == 'PM'
        arr[0] = arr[0].to_i + 12
    end
   arr.join(':')[0...-2]
end