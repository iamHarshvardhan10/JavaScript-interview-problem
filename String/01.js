// How to Get Character of Specific Position using JavaScript?

let myStr = 'Harshvardhan'

// using accessing element from index position
console.log(myStr[0])


// using charAt method in string
let newStr = myStr.charAt(1)
console.log(newStr)

// using for loop

for (let i = 0; i <= myStr.length-1;  i++ ){
    console.log(`Charachter of myStr string ${myStr[i]} and  position indexing ${i}`)
}


// using at method
// This method takes an index as an argument and returns the character at the given index. One advantage of using String.at() is that it supports negative indices, which means you can easily get characters starting from the end of the string.

let newStr1 = myStr.at(10)
console.log(newStr1)


// using slice method

myStr = myStr.slice(10,11)
console.log(myStr)

