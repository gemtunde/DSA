

// ^ can also be used to test if character exist at the beginning of the string
//returns true if CR7 is at the beginning of the string and false if not

let str = "CR7 is a GOAT and plays excellently"
let myRegex = /^CR7/ ;
let result = myRegex.test(str);
console.log(result)