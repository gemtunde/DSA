
//find more than one occurance of a match
//extract matches from a string
//use d to extract multiple matching word from a sentence
//this returns a multiple occurance of the word 
//g flag is used to return multiple occurance of the word
//i flag is also use for case sensitivity

let wordStr = "i love Ronaldo, coz Ronaldo is skillful and Ronaldo is a goat";
let playerRegex = /ronaldo/ig ;
let result = wordStr.match(playerRegex);
console.log(result) ;





