// How to replace all occurrences of a string in JavaScript ?

let myStr = 'Hello Everynone Good Morning Everynone'

// using replace method

let replaceStr = myStr.replace(/Everynone/gi,'all of you')
console.log(replaceStr)


// using split join

let newStr = myStr.split('Everynone').join('all')
console.log(newStr)

// replaceAll()

let replaceAllStr = myStr.replaceAll('Everynone','all')
console.log(replaceAllStr)

