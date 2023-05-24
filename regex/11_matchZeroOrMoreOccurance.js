


//EXAMPLE 1
// * is used to match characters that occur ZERO or more times
let soccerWord = "gooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon"
let myRegex = /go*/ig ;

//let result = soccerWord.match(myRegex); // returns "g" and all occurance of "o"
//let result = gPhrase.match(myRegex); // returns only all the occurance of "g". since "o" is not there  
let result = oPhrase.match(myRegex); // returns null, since "g" is not there  

console.log(result);


