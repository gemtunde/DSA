

// you can match a group of predefined characters

// in the example below,  the first and last letters outside the brackects ([]) must be matched
// but any of the letters in the [a,i,u,e] is matched and return

// without i and g flag, a the first occurance of the match is returned.
//this returns a multiple occurance of the word, if the i and g flag is used
//g flag is used to return multiple occurance of the word
//i flag is also use for case sensitivity

//Example 1
// let str = "i hate bUG, coz they are a biG mess in code and you could Bag hours to beg someone to help you solve bug "
// let vowelRegex = /b[a,i,u,e]g/ig ;
// let result = str.match(vowelRegex) ;
// console.log(result);

//Example 3
//match vowels
// let str = "i hate bUG, coz they are a biG mess in code and you could Bag hours to beg someone to help you solve bug "
// let vowelRegex = /[a,i,u,e,o]/ig ;
// let result = str.match(vowelRegex) ;
// console.log(result);

//Example 3
//match range of letters
let str = "i hate bUG, coz they are a biG mess in code and you could Bag hours to beg someone to help you solve bug "
let vowelRegex = /[a-z]/ig ;
let result = str.match(vowelRegex) ;
console.log(result);



