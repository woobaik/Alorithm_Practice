const range = (arr, l, r) => {
  sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (l <= arr[i] && arr[i] <= r) {
      sum += arr[i]
    }
  }
  return sum
}

range([10, 5, 15, 3, 7, null, 18], (L = 7), (R = 15))
