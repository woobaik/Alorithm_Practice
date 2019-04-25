function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result
}


const arr1 = [5, 4, 3, 2, 1, 1, 43, 123123, 1, -234]

// console.log(arr1.length)
mergeSort(arr1)
