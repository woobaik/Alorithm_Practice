function flatten(array, result = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], result);
        } else {
            result.push(array[i])
        }
    }
    return result
}


const array = [[1, 2, 3], [4, 5, 6, 7], [[8]], [9, 10], [11, 12, [13, 14]]]
flatten(array);