
//quantity specifier
// match Range Of Repeated Letters
// specify upper and lower number of matches
//pattern matches
//match multiple occerence of letters or numbers

let str = "ohhh no";
let myRegex = /oh{3,6} no/g;
//let result = myRegex.test(str);
let result = str.match(myRegex);
console.log(result);





