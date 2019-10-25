const chunk = (arr, num) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (!result[result.length - 1]) {
      result.push([arr[i]])
    } else if (result[result.length - 1].length < num) {
      result[result.length - 1].push(arr[i])
    } else {
      result.push([arr[i]])
    }
  }

  return result
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
