function qSort(arr) {

    const [pivot, ...rest] = arr;
    const left = [], right = [];

    if (arr.length <= 1) {
        return arr
    }

    rest.forEach(el => pivot > el ? left.push(el) : right.push(el));

    // return qSort(left).concat(pivot).concat(qSort(right))

    return [...qSort(left), pivot, ...qSort(right)]
}


// Quicksort => quick! 
// we need a pivot. (would be better if the pivot value is middle of the array) average case it will be n log n

// the worstcase,=> if we every time we pick lowest value as pivot. n^2


// arr = [0,4,5,2,6,23,11,8]

// pivot = 0 
// we go through all the elements of the array, and compare it to its pivot. if the element is less than the pivot, we put that element into left array. otherwise put it in to the right array. 

// left = [ ]
// pivot = 0
// right = [ 4, 5, 2, 6, 23, 11, 8]

// qSort(left) + pivot + qSort(right)
//     L // this is not necessary.

arr = [0, 4, 5, 2, 6, 23, 11, 8, 0]
qSort(arr)