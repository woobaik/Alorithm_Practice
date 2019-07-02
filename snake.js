function snake(num) {
    let counter = 1
    const result = []
    let startRow = 0
    let endRow = num - 1
    let startCol = 0
    let endCol = num - 1

    for (let i = 0; i < num; i++) {
        result.push([])
    }

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter
            counter += 1
        }
        startRow += 1

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter
            counter += 1
        }
        endCol -= 1

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter
            counter += 1
        }
        endRow -= 1

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter
            counter += 1
        }
        startCol += 1
    }
    return result
}

snake(5)