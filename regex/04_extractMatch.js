

//extract matches from a string
//use d to extract matching word from a sentence
//this returns a single or first occurance of the word 
//i flag is also use for case sensitivity

let extractClub = " i Love to play for Chelsea and Madrid";
let clubRegex = /madrid/i;
let result = extractClub.match(clubRegex) ;
//console.log(result[0]);
console.log(result);

