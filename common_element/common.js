const common = (arr1, arr2) => {
    const counter = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!(counter[arr1[i]])) {
            counter[arr1[i]] = true
        }
    }
    console.log(counter)
    for (let j = 0; j < arr2.length; j++) {
        if (counter[arr2[j]] === true) {
            return true
        }
    }
    return false
}


const arr1 = [3, 1, 5, 2, 3, 6, 7, 8, 2];
const arr2 = [11, 2, 3];

common(arr1, arr2)