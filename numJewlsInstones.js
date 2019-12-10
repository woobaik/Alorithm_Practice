var numJewelsInStones = function(J, S) {
  const arrayJew = J.split("")

  const arrayStone = S.split("")
  const stoneElement = {}
  let result = 0
  for (let i = 0; i < arrayStone.length; i++) {
    if (stoneElement[arrayStone[i]]) {
      stoneElement[arrayStone[i]] += 1
    } else {
      stoneElement[arrayStone[i]] = 1
    }
  }

  for (let j = 0; j < arrayJew.length; j++) {
    if (stoneElement[arrayJew[j]]) {
      result += stoneElement[arrayJew[j]]
    }
  }

  return result
}
