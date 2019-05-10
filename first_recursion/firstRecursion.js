const recursion = (arr) => {
    const hashMap = {};

    for (let i = 0; i < arr.length; i++) {
        if (!(hashMap[arr[i]])) {
            hashMap[arr[i]] = 1
        } else {
            return arr[i]
        }
    }
    return undefined
}

const array = [1, 2, 4, 5, 3, 7, 8];

recursion(array)