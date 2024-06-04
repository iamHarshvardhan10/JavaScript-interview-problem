// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getPostiveNumber(arr){
    const postiveArray = []
    for(let i=0; i < arr.length; i++){
        if(arr[i] >= 0){
            postiveArray.push(arr[i])
        }
    }
    return postiveArray
}

console.log(getPostiveNumber([-1,0,-3,-2,2,3,4,5,100,12,23,34,-10,-20,-89]))