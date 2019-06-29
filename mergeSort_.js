const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// 1. this is a fast sorting algorithm. because it's "divide and conquer". O(logN) along with quicksort, it's one of the fastest sorting algorithm.

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))

}
// 
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex += 1
        } else {
            result.push(right[rightIndex])
            rightIndex += 1
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

mergeSort(numbers)