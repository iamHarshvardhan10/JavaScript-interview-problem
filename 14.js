// Remove duplicates from an array and string.

// using loop

const arr = [1, 1, 1, 2, 3, 4, 2, 3, 1, 5, 4, 6, 7, 8, 1, 5, 6, 8]
const newArr = []
const duplicateItem = []

for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    } else {
        duplicateItem.push(arr[i])
    }
}
console.log(newArr)
console.log(duplicateItem)



// using set 
const arr2 = [1, 2, 3, 2, 3, 2, 4, 2, 4, 5, 4, 5, 5, 6, 6]
const uniqueItem2 = [...new Set(arr2)]
console.log(uniqueItem2)


// remove duplicates from string

// using split join 

const str = 'hehllo3'

const ConvertToarr = str.split('')
const emptyArr = []
for (let i = 0; i < ConvertToarr.length; i++) {
    if(!emptyArr.includes(ConvertToarr[i])){
        emptyArr.push(ConvertToarr[i])
    }
}
const newStr = emptyArr.join('')
console.log(newStr)


// 

const str1 = 'helllohheeeeoooohlelo'
let temp =''

for(let i=0;i<str1.length; i++){
    if(!temp.includes(str1[i])){
        temp = temp + str1[i]
    }
}
console.log(temp)