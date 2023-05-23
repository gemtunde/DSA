
//match literal strings

//EXAMPLE 1
//check if Waldo is in regex
//here we check if Tunde is contain or matched in the sentence(tundeText)

let tundeText = "somewhere Tunde is hiding in this text";
let tundeRegex = /Tunde/;
let result = tundeRegex.test(tundeText);
console.log(result)