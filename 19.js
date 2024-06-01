// fibonnaci series

// 0,1,1,2,3,5,8,13,21,

let a = 0
let b = 1
console.log(a)
console.log(b)
for (let i = 2; i <= 10; i++) {
    let sum = a + b
    console.log(sum)
    a = b
    b = sum
}