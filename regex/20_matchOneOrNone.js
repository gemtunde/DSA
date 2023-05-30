
// ? is used to check/test for possible existence of an element
// this checks for 1 or zero existence of the preceeding element
//the precceding element is optional

let str = "favorite";
let myRegex = /favou?rite/;
let result = myRegex.test(str);

console.log(result);

