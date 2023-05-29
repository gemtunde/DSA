

// $ can also be used to test if character exist at the ending of the string
//returns true if CR7 is at the beginning of the string and false if not

let str = "CR7 is a GOAT";
let myRegex = /GOAT$/ ;
let result = myRegex.test(str);
console.log(result)