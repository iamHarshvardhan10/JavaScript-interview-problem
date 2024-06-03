// revese the each word from sentences
// hello everyone 
// olleh enoyteve

const str = 'hello everyone'
const splitStr = str.split(' ')
console.log(splitStr)
const newStr = splitStr.map((word) => {
    return word.split('').reverse().join('')

})

console.log(newStr)


