

//Match a literal string with different possibilities
//this makes use of the OR operator which is a single pipe character (|)

//EXAMPLE 2
// CHECK OR MATCH FOR DOG, CAT FISH, CHICKEN

let petString = "Tunde loves eating Fish, Cat, Turkey and Chicken";
let petRegex = /Cat|Fish|Chicken/ 
let result = petRegex.test(petString);
console.log(result);




