arr = "abccdaq".split("")

const longest = arr => {
  hashMap = {}
  let start = 0
  let maxLeng = 1
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      start = hashMap[arr[i]] + 1
    }

    hashMap[arr[i]] = i
    maxLeng = Math.max(maxLeng, i - start + 1)
  }

  return maxLeng
}

longest(arr)
