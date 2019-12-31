const vowelCounter = str => {
  const VOWELS = ["a", "e", "i", "o", "u"]
  let counter = 0
  for (let char of str) {
    if (VOWELS.includes(char.toLowerCase())) {
      counter += 1
    }
  }

  return counter
}

vowelCounter("haraim")
