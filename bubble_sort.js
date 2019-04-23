function bubbleSort(array) {
    if (array.length < 2) {
        return array
    }

    for (let i = 0; i < array.length - 1; i++) {
        //compare two elements
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }

        }
    }
    return array
}
const example = [1, 2, 3]  // length = 3 
const arr = [1, 3, 5, 23, 6, 1, 7, 5, 4, 2, 3, 66]
const arr1 = [1]
console.log(bubbleSort(arr))