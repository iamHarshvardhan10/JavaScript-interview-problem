// Find the smallest number in an array.

const arr1 = [12,32,32,34,56,43,-1,2,3]


let temp = arr1[0]
for(let i =0 ; i < arr1.length; i++){
    if(arr1[i] < temp){
        temp = arr1[i]
    }
}
console.log(temp)


// using while loop

let i = 0
let totalIteration = arr1.length - 1
let minimumNumber = arr1[0]
while(i < totalIteration){
    if(arr1[i] < minimumNumber){
        minimumNumber = arr1[i]
    }
    i++
}

console.log(minimumNumber)