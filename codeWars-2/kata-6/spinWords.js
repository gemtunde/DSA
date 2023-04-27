// Write a function that takes in a string of one or more words, and 
// returns the same string, but with all five or more letter words
//  reversed (Just like the name of this Kata). Strings passed in will consist of only letters
//   and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"




//1 split the string
//2 check if each word is >= 5
//3 if <5,  don't reverse
//4 reverse if >= 5
//join array together
//5 return the string
function spinWords(longStr) {
    return longStr.split(" ").map(word => word.length >= 5 ? reverseStr(word) : word).join(" ") ;

    function reverseStr(word){
        return word.split("").reverse().join("");
    }
}

//spinWords("welcome");
spinWords("welcome to my ChelseaFc");
