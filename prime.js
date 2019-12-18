const prime = num => {
  const numArray = new Array(20).fill(true)
  const result = []
  numArray[0] = false
  numArray[1] = false

  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = 2; i * j < num; j++) {
      numArray[i * j] = false
    }
  }

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i]) {
      result.push(i)
    }
  }
  return result
}
