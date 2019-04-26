function reverseString(str) {
    let result = []
    let chunk = str.split(' ');
    for (let i = 0; i < chunk.length; i++) {
        let temp = chunk[i].split('').reverse().join('')
        result.push(temp)
    }
    return result.join(' ')
}

reverseString('apple is red');
