function twoSum(arr, sum) {
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            return true
        }
        set.add(sum - arr[i])
    }

    return false
}


arr = [1, 2, 3, 4, 5, 6, 15, 11]

twoSum(arr, 4)