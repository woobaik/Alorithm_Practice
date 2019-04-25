function quickSort(array) {
    if (array.length < 2) {
        return array
    }
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}

const arr = [2123, 3124, 21, 4, 123, 7, 45, 1, -341, 324, 1, 56];
quickSort(arr)