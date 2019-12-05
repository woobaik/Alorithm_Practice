arr1 = [0, 3, 4, 31]
arr2 = [4, 6, 30]

// brutal force
const merge1 = (arr1, arr2) => {
  const result = arr1.concat(arr2)

  return result.sort((a, b) => {
    return a - b
  })
}

const merge2 = (arr1, arr2) => {
  const result = []

  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i += 1
    } else {
      result.push(arr2[j])
      j += 1
    }
  }

  if (arr1[i]) {
    for (k = j; k < arr2.length; k++) {
      result.push(arr2[k])
    }
  } else {
    for (k = i; k < arr1.length; k++) {
      result.push(arr1[k])
    }
  }

  return result
}

merge2(arr1, arr2)
