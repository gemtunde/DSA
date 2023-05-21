//reverse

// use to reverse an array as the name says
//this changes/modifies the original array

//EXAMPLE 1
const numbers = [1,2,3,4,5,6,7]
// numbers.reverse();
// console.log(numbers)


//EXAMPLE 2
//to preveent the original from been modified, use the spread operator or
//cancat method
const newArr = numbers.concat().reverse();
//or spread operator to prevent modifying the original array
const newArr2 = [...numbers].reverse();
console.log(numbers)
console.log(newArr)