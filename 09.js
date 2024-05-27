// check  if array is sorted

const numberArray = [1, 2, 4, 3, 5, 5]
let isSorted = false
for (let i = 0; i < numberArray.length - 1; i++) {
    if (numberArray[i] <= numberArray[i + 1]) {
        isSorted = true
        break;
    }
}

if(!isSorted){
    console.log('array is sorted')
}else{
    console.log('array is not sorted')
}