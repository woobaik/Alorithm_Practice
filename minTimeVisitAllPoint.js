const minTime = arr => {
  let sum = 0
  for (let i = 0; i < arr.length - 1; i++) {
    let [currentX, currentY] = arr[i]
    let [nextX, nextY] = arr[i + 1]
    if (currentX !== nextX || currentY !== nextY) {
      let absX = Math.abs(currentX - nextY)
      let absY = Math.abs(currentY - nextY)

      sum += Math.max(absX, absY)
    }
  }

  return sum
}
