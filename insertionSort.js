function insertionSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    for (let i = 1; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                arr.splice(j, 0, ...arr.splice(i, 1))
            }
        }
    }
    return arr
}

