
//  \s (lowecase) is use to match whitespace that is separating words in a string

// let str = "i love watching football and wrestling matches";
// let myRegex = /\s/g ;
// let result = str.match(myRegex);
// console.log(result);


//  \S (capital) is use to match non-whitespace in a string

let str = "i love watching football and wrestling matches";
let myRegex = /\S/g ;
let result = str.match(myRegex);
console.log(result);