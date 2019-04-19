function mergeSort(arr1,arr2) {
  const result = []
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length ) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i += 1
    } else {
      result.push(arr2[j])
      j += 1
    }
  }
  return result
}

const a = [1,2,4,6,8,9];
const b = [2,3,4,5,6,7];

mergeSort(a,b)