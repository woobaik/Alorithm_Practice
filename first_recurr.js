// first recurring item

const randomArray = () => {
  const result = []
  for (let i = 0; i < 5; i++) {
    result.push(Math.floor(Math.random() * 15 + 1))
  }
  return result
}

const ar1 = randomArray()

console.log(ar1)
const firstRec = arr => {
  const result = {}

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      return arr[i]
    } else {
      result[arr[i]] = 1
    }
  }

  return false
}

firstRec(ar1)
