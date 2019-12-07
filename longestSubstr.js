const lngestSub = arr => {
  const hashMap = {}
  let maxLength = 0
  let windowStart = 0

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i] >= windowStart]) {
      windowStart = hashMap[arr[i]] + 1
    }
    hashMap[arr[i]] = i

    maxLength = Math.max(maxLength, i - windowStart + 1)
  }
  return maxLength
}

const arr = ["a", "b", "c", "d", "e", "f"]
lngestSub(arr)
