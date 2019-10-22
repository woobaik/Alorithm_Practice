var groupAnagrams = function(arr) {
  const hashMap = {}
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
      .split("")
      .sort()
      .join("")
    if (hashMap[temp]) {
      hashMap[temp].push(arr[i])
    } else {
      hashMap[temp] = [arr[i]]
    }
  }
  return Object.values(hashMap)
}
