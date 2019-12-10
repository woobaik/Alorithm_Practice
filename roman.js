const roman = roman => {
  const digit = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const arr = roman.split("")
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    let current = digit[arr[i]]
    let next = digit[arr[i + 1]]

    if (current < next) {
      console.log(current, next)
      total += next - current
      i += 1
    } else if (next === undefined) {
      total += current
    } else {
      total += current + next
      i += 1
    }
  }

  return total
}

roman("MCXV")
