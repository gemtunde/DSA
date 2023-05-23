
//match anything with a wildCard period
// in regex, a wildcard is a period (.) which can stand for anything
//wch means it can be used to stand in for any letter
// without i and g flag, a the first occurance of the match is returned.
//this returns a multiple occurance of the word, if the i and g flag is used
//g flag is used to return multiple occurance of the word
//i flag is also use for case sensitivity

//in the example below, it search for a match for "un", the first letter could be any because of
// of the period(.) wildcard

let str = "its FUN seeing Ronaldo run and gun down his opponents";
let playerRegex = /.un/ig ;
let result = str.match(playerRegex);
console.log(result);





