// Write a JavaScript program that displays the largest integer from array.

let numberArray = [19, 23, 67, 1, 99, 222, 999, 3, 0]

let largestNumber = Math.max(...numberArray)
console.log(largestNumber)


// finding largest number using loop

let maxNumber = numberArray[0]
for (let i = 0; i < numberArray.length; i++) {
    // console.log(numberArray[i])
    if (numberArray[i] > maxNumber) {
        maxNumber = numberArray[i]
    }
}



// for of loop
const numberArray2 = [12, 32, 2, 2, 3, 4, 100, 38292, 2223, 34, -1, -1, 223, 3]
let maxNumberForofLoop = numberArray2[0]

for (let number of numberArray2) {
    if (number > maxNumberForofLoop) {
        maxNumberForofLoop = number
    }
}

console.log(maxNumberForofLoop)


// using while loop

const numberArray3 = [100, 23, 4, 5, 6, 1222, 32, 1, 1, 1, 2332]
let maxNumberWhileLoop = numberArray3[0]
let i = 0
while (i < numberArray3.length) {
    if (numberArray3[i] > maxNumberWhileLoop) {
        maxNumberWhileLoop = numberArray3[i]

    }
    i++
}
console.log(maxNumberWhileLoop)