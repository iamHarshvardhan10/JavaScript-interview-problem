// JavaScript Program to Check Whether a String is Palindrome or Not

// using built methods

const string = 'hello'
const reverse = string.split('')
const reverseMethod = reverse.reverse()
const reverseString = reverseMethod.join('')
console.log(reverseString)

if(string == reverseString){
    console.log('palindrome')
}else{
    console.log('not palindrome')
}



// using for loop

const string1 = 'madam'
let temp = ''

for(let i = string1.length-1; i>=0;i--){
    temp = temp + string1[i]
}
if(string1 == temp.trim()){
    console.log('its palindrome')
}else{
    console.log('its not palindrome')
}


// another approach using for loop

for(let i = 0; i < string1.length / 2; i++){
    if(string1[i] == string1[string1.length - 1 - i]){
        console.log('its palindrome')
        break
    }else{
        console.log('its not palindrome')
        break
    }
}


// using while loop

const string2 = 'maam'
let startChar = 0
let endChar = string2.length -1

while(startChar < endChar){
    if(string2[startChar] == string2[endChar]){
        console.log('its palindrome')
        break
    }else{
        console.log('its not palindrome')
        break
    }
    startChar++
    endChar--
}