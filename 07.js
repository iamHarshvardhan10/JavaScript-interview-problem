// reverse an array

const orgArray = [10,21,23,45,678,90,21,34]

// using reverse method

const reverseArray = orgArray.reverse()
console.log(reverseArray)


// using for loop

const newArray = [10,20,30,40,50,60,7080,90,100]
const reverseArray1 = []
for (let i = newArray.length -1; i >= 0; i--){
    reverseArray1.push(newArray[i])
}
console.log(reverseArray1)


// using while loop through pointer / indexing 
const newArray1 = [10,20,30,40,50,60,7080,90,100]
let left = 0
let right = newArray1.length-1

while(left < right){
    let temp = newArray1[left]
    newArray1[left] = newArray1[right]
    newArray1[right] = temp
    left++
    right--
}
console.log(newArray1)



// using for loop reverse array through indexing

const newArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let n = newArray2.length;

for (let i = 0; i < n / 2; i++) {
    let temp = newArray2[i];
    newArray2[i] = newArray2[n - i - 1];
    newArray2[n - i - 1] = temp;
}
console.log(newArray2); 


// using pop and push

const orgArray1 = [1,2,3,4,5,6,7,8,9]
const reverseArray2 = []
for (let i = orgArray1.length - 1; i >= 0 ; i--){
    const popElem = orgArray1.pop()
    reverseArray2.push(popElem)
}
console.log(reverseArray2)

