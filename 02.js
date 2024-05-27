// How to replace multiple spaces with single space in JavaScript?

let myStr  = '  hello      everyone   this  javascript   question   interview   series  '

console.log(myStr.length)

let trimNewStr = myStr.trim()
let splitNewStr = trimNewStr.split(/[\s,\t,\n]+/).join(' ')
console.log(splitNewStr)


//  using for loop

let result = ''
let prevChar = ''

for (let i = 0; i< myStr.length; i++){
    // console.log(myStr[i])
    let currentChar = myStr[i]
    if(!(currentChar === ' ' && prevChar === ' ')){
        result = result + currentChar
    }
    prevChar = currentChar
}
let newStr = result.trim()
console.log(prevChar.length)
console.log(newStr)