const ransome = (sentence, magazine) => {
  const dictionary = {}
  const sentenceArray = sentence.toLowerCase().split(" ")
  const magazineArray = magazine.toLowerCase().split(" ")
  let result = true
  magazineArray.forEach(word => {
    if (!dictionary[word]) {
      dictionary[word] = 1
    } else {
      dictionary[word] += 1
    }
  })

  sentenceArray.forEach(word => {
    if (dictionary[word]) {
      dictionary[word] -= 1
      if (dictionary[word] < 0) {
        result = false
      }
    } else {
      result = false
    }
  })

  return result
}

ransome("apple is red red", "apple is blue but red")
