const arr = []
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 10))
}
console.log(arr)
const maxProfit = arr => {
  let buying = arr[0]
  let maxProfit = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < buying) {
      buying = arr[i]
    }

    if (arr[i] - buying > maxProfit) {
      maxProfit = arr[i] - buying
    }
  }
  return maxProfit
}

maxProfit(arr)
