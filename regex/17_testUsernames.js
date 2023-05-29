//1. if ther are numbers, they must be at the end
//2. letters must be uppcase or lowercase
//3. atleast 2characters long. 2 letter names cannot have numbers

let username = "JackOfAllTrades126";
//explaining the regex 
// ^ indicates letters must be at the beginning
// [A-Za-z] indicates the range of letters
// {2,9} indicates the number of letters allowed at the beggining(or previous) which is 2-20 letters
//  \d means numbers
//  * means zero or more
//  $ means the previous must be or exist at the end

let myRegex = /^[A-Za-z]{2,20}\d*$/;
let result =myRegex.test(username);
console.log(result)




