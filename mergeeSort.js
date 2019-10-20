const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10))
}

const merge = (left, right) => {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (left.length) {
    result = result.concat(left)
  }
  if (right.length) {
    result = result.concat(right)
  }

  return result
}

const mergeSort = arr => {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)

  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

mergeSort(arr)
