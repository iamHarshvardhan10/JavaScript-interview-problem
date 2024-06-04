// Calculate the sum of numbers in an array of numbers



function sumOfArray(numbers) {

    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum

}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(sumOfArray(numbers))
console.log(sumOfArray(numbers1))