const vowel = str => {
  let count = 0
  const arr = ["a", "e", "i", "o", "u"]

  for (let chr of str) {
    if (arr.includes(chr)) {
      count += 1
    }
  }

  return count
}

vowel("happyi")
