const str = "abcdacdbvk"

const longestSub = str => {
  const indexMap = {}
  let windowStart = 0
  let maxLength = 0
  for (let i = 0; i < str.length; i++) {
    let windowEnd = str[i]
    if (indexMap[windowEnd] >= windowStart) {
      windowStart = indexMap[windowEnd] + 1
    }

    indexMap[windowEnd] = i
    maxLength = Math.max(maxLength, i - windowStart + 1)
  }

  return maxLength
}

longestSub(str)
