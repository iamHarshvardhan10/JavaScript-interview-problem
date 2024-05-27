// remove the consecutive duplicates from  array and string


// using for loop
const numArray = [1, 1, 1, 2, 2, 2, 1,3, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9]
const remove = []
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== numArray[i + 1]) {
        remove.push(numArray[i])

    }
}
console.log(remove)


// removing duplicates from string 

const str = 'hhehlloh'
const newStr = []
for(let i= 0; i < str.length; i++){
    if(str[i] !== str[i+1]){
        newStr.push(str[i])
    }
}
console.log(newStr.join(''))


// using while loop

const numArray1 = [10,20,10,20,30,30,30,30,40,50]
const removeDuplicates = []
let i = 0 
while(i < numArray1.length){
    if(numArray1[i] !== numArray1[i+1]){
        removeDuplicates.push(numArray1[i])
    }
    i++
}

console.log(`remove element from array ${removeDuplicates}`)
