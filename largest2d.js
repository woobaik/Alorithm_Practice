function maxProduct(arr) {
    let max = arr[0][0] * arr[0][1];



    for (let row = 0; row < arr.length; row++) {
        let top, bot;
        for (let col = 0; col < arr[row].length; col++) {
            target = arr[row][col];

            // check left * target
            if (col - 1 >= 0) {
                let left = arr[row][col - 1];
                if (max < target * left) {
                    max = target * left;
                }
            }
            // check right * target
            if (col + 1 > arr[row].length) {
                let right = arr[row][col + 1];
                if (max < target * right) {
                    max = taget * right;
                }
            }



            if (row - 1 >= 0) {
                let top = arr[row - 1][col];
            } if (max < target * top) {
                max = target * top
            }

            // check bot * target 

            if (row + 1 < arr.length) {
                let bot = arr[row + 1][col];
            } if (max < bot * target) {
                max = target * bot
            }

        }
    }
    return max
}

const array = [
    [35, 45, 100, 99],
    [93, 340, 88, 12],
    [32, 900, 100, 74],
    [77, 33, 88, 99]
]

maxProduct(array)