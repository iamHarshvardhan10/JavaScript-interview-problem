// number to check wheather its is palindrome or not


var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }

    let original = x
    let reversed = 0

    while (x > 0) {
        let digit = x % 10
        console.log(digit)
        reversed = reversed * 10 + digit
        console.log(reversed)
        x = Math.floor(x / 10)
        console.log(x)

    }

    return reversed == original
};

console.log(isPalindrome(1234))


// using for loop

function numberIspalidrome(number) {
    if (number < 0) {
        return false
    }
    let org = number
    let rev = 0

    for (let i = number; i > 0; i = Math.floor(i / 10)) {
        let digit = i % 10
        rev = rev * 10 + digit
    }
    return rev == org
}

console.log(numberIspalidrome(121))