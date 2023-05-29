

//   \w(lowercase w) is a shoert hand way of match range of letters a-z, 0-9 and underscore _ 
//  its does not match spaces

// let str = "The five soccer legends have all won ballon d'oor and their club league titles";
// let myRegx = /\w/ig ;
// let result = str.match(myRegx);
// console.log(result)


//Example 2
// inother to match the opposite of the above... that is spaces btw characters use \W (capital W)
let str = "The five soccer legends have all won ballon d'oor and their club league titles.";
let myRegx = /\W/g ;
let result = str.match(myRegx).length;
console.log(result)

