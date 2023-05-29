


// "\d"(lowercase d) is a short hand to match all numbers and digits in a string

let str = "The price of shoe is $28.45 in jumia store"
let myRegex =/\d/g;
let result = str.match(myRegex);
console.log(result);