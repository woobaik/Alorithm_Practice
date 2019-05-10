// const sortedArray = (arr1, arr2) => {
//   const result = [];
//   let i = 0;
//   let j = 0;

//   while (result.length < arr1.length + arr2.length) {
//     if (arr1[i] === undefined) {
//       result.push(arr2[j])
//       j += 1
//     } else if (arr2[j] === undefined) {
//       result.push(arr1[i])
//       i += 1
//     } else if (arr1[i] < arr2[j]) {
//       result.push(arr1[i])
//       i += 1
//     } else {
//       result.push(arr2[j])
//       j += 1
//     }
//   }
//   return result
// }



const sortedArray = (arr1, arr2) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (result.length < arr1.length + arr2.length) {
        if (arr2[j] === undefined || arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i += 1
        } else {
            result.push(arr2[j])
            j += 1
        }
    }
    return result
}


const arr1 = [1, 1, 1, 1];
const arr2 = [2, 2, 2, 2]
sortedArray(arr1, arr2)