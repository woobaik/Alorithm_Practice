function maxChar(str) {
  const result = {}
  let max = 0
  let maxKey = ""
  for (let char of str) {
    if (!result[char]) {
      result[char] = 1
    } else {
      result[char] += 1
    }
  }

  for (let key in result) {
    if (max < result[key]) {
      max = result[key]
      maxKey = key
    }
  }
  return maxKey
}

maxChar("11")
