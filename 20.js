// revese the each word from sentences
// hello everyone 
// olleh enoyteve

const str1 = 'harshvardhan bhosale'
const splitStr = str1.split(' ')
console.log(splitStr)
const newStr = splitStr.map((word) => {
    return word.split('').reverse().join('')

})

console.log(newStr.join(' '))




// using for loop

let newString = 'hey coder bring party here'
let newRes = ''
let finalAns = ''

for (let i = 0; i < newString.length; i++) {
    if (newString[i] == ' ') {
        finalAns = finalAns + ' ' + newRes + ''
        newRes = ''
    } else {
        newRes = newString[i] + newRes
    }
}

finalAns = finalAns + ' ' + newRes

console.log(finalAns.trim())
