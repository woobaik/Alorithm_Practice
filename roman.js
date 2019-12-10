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
  let totalNumber = digit[arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let currentLetter = digit[arr[i]]
    let previousLetter = digit[arr[i - 1]]

    if (currentLetter > previousLetter) {
      // IV => V > I
      totalNumber += currentLetter - previousLetter
    } else {
      totalNumber += currentLetter
    }
  }

  return totalNumber
}

roman("IV")
