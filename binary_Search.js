const arr = [-21, 1, 3, 3, 4, 5, 5, 6, 9, 11, 21, 55, 44123]

const binarySearch = (arr, target) => {
  let mid = Math.floor(arr.length / 2)

  if (target === arr[mid]) {
    return true
  } else if (target < arr[mid]) {
    return binarySearch(arr.splice(0, mid), target)
  } else if (target > arr[mid]) {
    return binarySearch(arr.splice(mid, arr.length - 1), target)
  } else {
    return false
  }
}

binarySearch(arr, 44124)
