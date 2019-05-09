// const reverse = (str) => {
//   const splited = str.split('');
//   let result = ''
//   for (let i = splited.length -1; i > 0; i--) {
//     result += splited[i]
//   }
//   return result
// }


const reverse = (str) => {

    const splited = str.split('')
    const result = splited.reduce((prev, current) => {
        return current += prev
    }, '')
    return result
}


const str1 = 'apple pie is good'

reverse(str1)