

//match single characters that are not specified
// these are called negated character set
//carrot symbol(^) is used for these

let str = "Chelsea is the pride of london and has won 19 FA, 4 leagues";
let clubRegex = /[^3-7aeiou]/ig;
let result = str.match(clubRegex);
console.log(result);






