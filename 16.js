// Count the number of vowels in a string.

function CountVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'e' || str[i] === 'o' || str[i] === 'u') {
            count = count + 1
        }
    }
    return count
}

console.log(CountVowel('fdfhdhfh'))


// another method 

function countVowel(str) {
    let count = 0;
    const newSet = new Set(['a', 'i', 'o', 'e', 'u'])
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (newSet.has(str[i])) {
            count = count + 1
        }
    }
    return count
}

console.log(countVowel('hello'))