
//positive and negative lookahead

// EXAMPLE 1
// let quit = "qu";
// let noquit = "qt";
// let quRegex = /q(?=u)/g; // = is positive lookahead. = checks if u is following or exists after q
// let qtRegex = /q(?!u)/g; // ! is negative lookahead. ! checks if u does not exists after q

// // let result = quit.match(quRegex); //returns q
// // let result = noquit.match(qtRegex); // returns q
// console.log(result)

//EXAMPLE 2
//checking for numbers greater than 5 characters

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

console.log(result);



