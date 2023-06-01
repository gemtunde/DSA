

//EXAMPLE 1

// let str = "CR7 is the greatest Footballer" ;
// let myRegex = /CR7/ig ;
// let player = "Cristiano Ronaldo";
// let result = str.replace(myRegex, player);
// console.log(result);



// EXAMPLE 2
// SWITCH WORDS IN A STRING
// let str = "MESSI RONALDO";
// let myRegex = /(\w+)\s(\w+)/
// let result = str.replace(myRegex, '$2 $1') ; 

// console.log(result);


// EXAMPLE 3
//REPLACE EMPTY SPACES IN STRING

let str = "  i watch football  ";
let myRegex = /^\s+|\s+$/g ;
let result = str.replace(myRegex, "");
console.log(result)

