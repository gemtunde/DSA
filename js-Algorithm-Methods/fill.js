//changes all the element of the array upon whch its called 
//it changes or modifies the original array

//const numbers = [1,2,3,4,5];

// EXAMPLE 1
//Fill all the element in the array
// numbers.fill(0);
// console.log(numbers);
// const num2 = numbers.fill(1)
// console.log(num2)

// EXAMPLE 2
//Here specify a start and end index to change/modify/fill
//fill from index 1 to index 4, but the last index is usually excluded
// const num3 = numbers.fill(0,1,4);
// console.log(num3);

//EXAMPLE 3

function fillNumbers(n){
 return  Array(n).fill(0).map((number, index) => index + 1)
}
console.log(fillNumbers(10))
