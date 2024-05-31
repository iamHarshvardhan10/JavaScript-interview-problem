// Sort an array in ascending order.

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {

                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;

            }
        }
    }
    return array
}

const array = [0, 2, 3, 1, 5, 4, 2, 1, 0]
console.log(sortArray(array))


// Sort an array in descending order.

function descSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

const arr = [0,1,2,3,4,5,6,7,8]
console.log(descSort(arr))