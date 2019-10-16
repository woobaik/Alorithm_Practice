const bubble = array => {
  const length = array.length
  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]

        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

console.log(bubble(numbers))
numbers.sort((a, b) => {
  return a - b
})
