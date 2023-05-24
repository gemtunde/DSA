
// match a range of letters and/or Numbers


let str = "BlackBerry 23.23690 is smart";
let matchRegex = /[2-6h-s]/ig;
let result = str.match(matchRegex);

console.log(result);


