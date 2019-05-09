const twoSum = (arr, sum) => {
    const result = []
    const hashMap = {};

    for (let i = 0; i < arr.length; i++) {
        let nextValue = sum - arr[i];

        if (hashMap[nextValue]) {
            result.push([arr[i], hashMap[nextValue]])
        } else {

            hashMap[arr[i]] = arr[i]
        }
    }
    return result
}

const arr1 = [1, 2, -6, 3, 4, 5, -2, -3];

twoSum(arr1, -1)