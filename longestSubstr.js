const lngestSub = arr => {
  const hashMap = {}
  let maxLength = 0
  let windowStart = 0

  for (let i = 0; i < arr.length; i++) {
    const endChar = arr[i]
    if (hashMap[endChar] >= windowStart) {
      windowStart = hashMap[endChar] + 1
    }
    hashMap[endChar] = i

    maxLength = i - windowStart + 1
  }
  return maxLength
}

const arr = ["a", "b", "a", "c", "d", "e", "f"]
lngestSub(arr)
