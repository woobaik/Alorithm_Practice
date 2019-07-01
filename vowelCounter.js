function vowelcounter(str) {
    let counter = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let chr of str) {
        if (vowels.includes(chr.toLowerCase())) {
            counter += 1
        }
    }
    return counter
}

vowelcounter('apple is red color')
