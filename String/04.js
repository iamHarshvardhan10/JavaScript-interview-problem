// reverse the string in javascript 

let myStr = 'hello'
let rev = ''
for(let i = myStr.length-1; i>=0; i--){
    rev = rev + myStr[i]
}


console.log(rev)



// using split reverse and join 

const myStr2 = 'Hello everyone'
console.log(myStr2)

const newStr = myStr2.split(' ')
console.log(newStr)

const reverseStr = newStr.reverse()
console.log(reverseStr)

const joinStr = reverseStr.join(' ')
console.log(joinStr)


