// Display Sum of n Natural Numbers

let n = 100
let sum = 0

for (let i = 0; i <= n; i++) {
    sum = sum + i
    console.log(`Sum of Each number and index ${i} at every instance`, sum)
}

console.log('total sum after iteration', sum)