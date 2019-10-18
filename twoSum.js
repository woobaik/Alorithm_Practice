const arr = [1, 6, 4, 5, 3, 3]

const twoSum = (arr, num) => {
  const dic = {}
  const result = []
  arr.forEach(element => {
    dic[element] = element

    if (dic[num - dic[element]]) {
      result.push([dic[num - dic[element]], dic[element]])
    }
  })

  return result
}

twoSum(arr, 7)
