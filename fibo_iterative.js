//[0,1,1,2,3,5,8,13]

function fib(num) {
    const result = [0, 1]
    if (num <= 1) {
        return [0]
    } else if (num === 2) {
        result
    } else {
        for (let i = 2; i < num; i++) {
            result.push(result[i - 1] + result[i - 2])
        }
    }
    return result
}

fib(7)