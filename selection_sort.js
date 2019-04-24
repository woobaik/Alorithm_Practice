function selectionSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                idx = j
            }
            arr[idx] = arr[i]
            arr[i] = min;
        }
    }
    return arr;
}


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arr2 = [1];
const arrr3 = [24, 13, 5, 6, 324, 1, 7, 5, 33];
const test = selectionSort(arrr3)
console.log(test)