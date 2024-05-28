// reverse the words in sentences like 
// original string :- welcome to home
// reversed string :- home to welcome

const str = 'welcome to home'

let temp = ''
let result = ''

for(let i = 0; i<str.length; i++){
    temp = temp + str[i]
    if(str[i] === ' ' || i === str.length-1){
        result = temp + ' ' + result
        temp=''
    }

}
console.log(result.trim())




// new string 
const name = 'Harshvardhan praptap bhosale'

let start = ''
let res = ''

for (let i = 0; i<name.length;i++){
    start = start + name[i]
    if(name[i] === ' ' || i === name.length -1){
        res = start + ' ' + res
        start = " "
    }  
}

console.log(res.trim())











