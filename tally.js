const arr = [1, 2, 7, 7, 4, 4, 4, 10, 44]


function tallySort(arr) {
    const result = []
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    const tally = Array.from({ length: max + 1 }, () => {
        return 0
    })
    for (let i = 0; i < arr.length; i++) {
        tally[arr[i]] += 1
    }
    for (let j = 0; j < tally.length; j++) {
        if (tally[j] !== 0) {
            for (let z = 0; z < tally[j]; z++) {
                result.push(j)
            }
        }
    }
    return result
}

tallySort(arr) 