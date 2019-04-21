function dup(arr) {
  const result = {};
  for(let i = 0; i < arr.length; i++) {
    if (result[arr[i]] !== undefined) {
      return arr[i]
    }
    else {
      result[arr[i]] = i
    }
  }
  return undefined
}

const arr1 = [1,2,1,2,4];

dup(arr1)