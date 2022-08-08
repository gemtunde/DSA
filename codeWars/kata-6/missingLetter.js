// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'


function findMissingLetter(array)
{
  for(let i = 0; i < array.length; i++){

    //convert letters to numbers
    let cur = array[i].charCodeAt(0);
    let current = cur+1 ;
    let next = array[i+1].charCodeAt(0);

    if(current !== next){
        //convert numbers back to letters
     return String.fromCharCode(current)
    }
  }
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));